const express = require("express");
const MyButton = require("my-button");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const hbs = require("handlebars");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const theHtml = `
  <html>
  <head><title>My First SSR</title></head>
  <body>
  <h1>My First Server Side Render</h1>
  <div id="reactele">{{{reactele}}}</div>
  <script src="/app.js" charset="utf-8"></script>
  <script src="/vendor.js" charset="utf-8"></script>
  </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(React.createElement(MyButton,{},'My Button'));
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  res.send(htmlToSend);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))