require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const notFoundError = require("./middleware/not-Availible");
const errorHandlerMiddleware = require("./middleware/error-handler");
const sendEmail = require("./controllers/sendEmail");
const id = require("./controllers/id");

const port = process.env.PORT || 3010;

app
  .use(express.static("./public"))
  .use(express.json())

  .get('/send', sendEmail)
  .get("/reset", id)
  .get("/reset/:id", (req, res) => {
    res.send("<h1>reset pass</h1>");
  })
  .use(notFoundError);
// .use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(port, console.log(`listening at port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
