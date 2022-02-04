//! Express App Setup
const express = require("express");
const app = express();
// const app = require("express")() faster method

//! Next App Setup
//imports tools from the next library
const next = require("next");
//find out if this is a dev or production build
const dev = process.env.NODE_ENV !== "production";
//creates a project with dev error templates
const nextApp = next({ dev });
//import request handlers for the server
const handler = nextApp.getRequestHandler();

//Routes
const signupRoute = require("./pages/api/v1/signup");

//! Express Middlewares
const { connectDB } = require("./DB/connect");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
app.use(express.json());

connectDB();

nextApp.prepare().then(() => {
  //Routing
  app.use("/api/v1/signup/:username", signupRoute);

  app.all("*", (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server listening at ${PORT}`);
  });
});
