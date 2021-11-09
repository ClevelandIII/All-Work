const port = 3000 || process.env.port;
const express = require("express");
app = express();
require("dotenv").config;
require("express-async-errors");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const jobs = require("./routes/jobs")
const login = require("./routes/auth")

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .use("/api/v1", jobs)
  .use("/api/v1", login)
  
  .use(notFound)
  .use(errorHandler)

  .get("/", (req, res) => {
    res.send("homepage");
  })

  .listen(3000, () => console.log(`server is listening at port ${port}`));
