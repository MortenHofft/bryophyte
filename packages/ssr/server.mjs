import express from 'express';
import puppeteer from 'puppeteer';
import ssr from './ssr.mjs';
import proxy from 'express-http-proxy';

let browserWSEndpoint = null;

const app = express();
app.use(express.static('build'))

// app.use('/*.*', proxy('www.gbif.org'));

app.use('/*.*', proxy('www.gbif.org', {
  proxyReqPathResolver: function (req) {
    console.log(req.originalUrl);
    return req.originalUrl;
  }
}));

app.get('/*', async (req, res, next) => {
  if (!browserWSEndpoint) {
    const browser = await puppeteer.launch();
    browserWSEndpoint = await browser.wsEndpoint();
  }
  // const url = `${req.protocol}://${req.get('host')}/index.html`;
  // const url = `https://www.gbif.org${req.url}`;
  const url = `http://labs.gbif.org:7013/`;
  // const url = `https://www.gbif.org/occurrence/search?taxon_key=10140389`;
  const {html} = await ssr(url, browserWSEndpoint);

  return res.status(200).send(html);
});


app.listen(3010, () => console.log('Server started. Press Ctrl+C to quit'));