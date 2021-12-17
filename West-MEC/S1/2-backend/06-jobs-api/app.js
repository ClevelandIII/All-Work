const port = process.env.PORT || 3001;
const express = require("express");
app = express();
require("dotenv").config();
require("express-async-errors");
// const notAvailible = require("./middleware/not-Availible");
const errorHandler = require("./middleware/error-handler");
const jobs = require("./routes/jobs");
const auth = require("./routes/auth");
const connectDB = require("./DB/connect-function");
const authenticationCheck = require("./middleware/authentication");

//SECURITY LIBRARIES
const xss = require("xss-clean");
const helmet = require("helmet");
const rateLimiter = require("express-rate-limit");
const cors = require("cors");

const minutes = 1000 * 60;
const limit = 15 * minutes;

//SwaggerUI
const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = YAML.load("./swagger.yaml")
app
  .set("trust proxy", 1)
  .use(rateLimiter({ windowMs: limit, max: 100 }))
  .use([express.urlencoded({ extended: false }), express.json()])

  //safety blanket, very simple and should be included
  .use(helmet())

  //cors prevents CORS error
  .use(cors())

  //user sanitization - cleans up user inputs to make sure they are safe
  .use(xss())

  .get("/", (req, res) => {
    res.send(`<h1> Jobs Api </h1> <a href="/api-docs"> Documention </a>`);
  })

  .use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc))

  .use("/api/v1/jobs", authenticationCheck, jobs)
  .use("/api/v1/auth", auth)

  // .use(notFound)
  .use(errorHandler);

const startup = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`server is listening at port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
startup();
