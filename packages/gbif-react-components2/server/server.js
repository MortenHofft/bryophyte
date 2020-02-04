const express = require('express');
const React = require("react")
const { renderToString } = require("react-dom/server")
const OccurrenceSearch = require('../src/components/search/OccurrenceSearch');

const app = express();
app.use(express.static('build'))

app.get('/*', async (req, res, next) => {

  const Root = React.createElement(
    "OccurrenceSearch",
    {style: 'calc(100vh - 20px)'},
    "content will be ignored in this component"
  );
    //<OccurrenceSearch style={{height: 'calc(100vh - 20px)'}}></OccurrenceSearch>
  const content = renderToString(Root);
  console.log(content)

  return res.status(200).send(content);
});


app.listen(3010, () => console.log('Server started. Press Ctrl+C to quit'));

