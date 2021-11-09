const express = require("express");
const app = express();
const morgan = require('morgan')
const logger = require('./middleware/logger')
const auth = require('./middleware/auth')

app
  .use([morgan('tdeviny'), auth])
  .get("/", (req, res) => {
    res.send("home page");
  })
//   .get("/about", logger, (req, res) => { is also valid for adding one middleware
  .get("/about", (req, res) => {
    res.send("about page");
  })
  .get("*", (re, res) => {
    res.send("bruh");
  })
  .listen(3000, () => console.log(`server listening at port 3000`));
