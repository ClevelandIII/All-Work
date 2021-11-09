const MongoDB = require("./db/connect");
const express = require("express");
const app = express();
const productsRouter = require("./routes/products");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

require("express-async-errors")
require("dotenv").config();

const startServer = async () => {
  try {
    await MongoDB(process.env.MONGO_URL);
    app
      .use([express.urlencoded({ extended: false }), express.json()])
      .get("/", (req, res) => {
        res.send("home");
      })
      .use("/api/v1/products", productsRouter)

      .use(notFound)
      .use(errorHandler)
      
      .listen(3000, () => console.log(`listening`));
  } catch (err) {
    console.log(err);
  }
};

startServer();
