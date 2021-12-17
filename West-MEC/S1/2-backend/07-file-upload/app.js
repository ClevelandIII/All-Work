require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const connectDB = require("./DB/connect-function");
const productRouter = require("./routes/productRoutes");

const notFoundError = require("./middleware/not-Availible");
const errorHandlerMiddleware = require("./middleware/error-handler");

const port = process.env.PORT || 3001;

app
  .use(express.static("./public"))
  .use(express.json())
  .use(fileUpload({ useTempFiles: true }))
  .get("/", (req, res) => {
    res.send("<h1>file upload starter</h1>");
  })
  .use("/api/v1/products", productRouter)
  .use(notFoundError);
// .use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL).then(
      app.listen(port, console.log(`listening at port ${port}`))
    );
  } catch (error) {
    console.log(error);
  }
};

start();
