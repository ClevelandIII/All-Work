const port = process.env.port || 3000;
const express = require("express");
const errhandlerMiddleware = require("./middleware/errhandler");
const notfound = require("./middleware/notfound");
const app = express();
require("dotenv").config;
const loginRouter = require("./routes/login");
require("express-async-errors");

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .use(express.static("./public"))
  .use("/api/v1", loginRouter)

  .use(notfound)
  .use(errhandlerMiddleware)

  .get("/", (req, res) => {
    res.send("homepage");
  })

  .listen(3000, () => console.log(`listening currently at port ${port}`));
