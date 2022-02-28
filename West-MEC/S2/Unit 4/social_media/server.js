//! Express App Setup
const express = require("express");
const { connectDB } = require("./server/util/connect");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");
const {auth} = require('./server/middleware/auth')

require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const app = express();
const PORT = process.env.PORT || 3000;

//! Next App Setup
//imports tools from the next library
const next = require("next");
//find out if this is a dev or production build
const dev = process.env.NODE_ENV !== "production";
//creates a project with dev error templates
const nextApp = next({ dev });
//import request handlers for the server
const handler = nextApp.getRequestHandler();

//! Routes
const userRoute = require("./server/routes/userRoutes");
const authRoute = require("./server/routes/authRoutes");
const uploadRoute = require("./server/routes/uploadPicRoutes");
const searchRoute = require("./server/routes/searchRoutes");
const postRoutes = require("./server/routes/postsRoutes")

//! Express Middlewares
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
 

//! More Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/uploads", uploadRoute);
app.use("/api/v1/search", searchRoute);
app.use("/api/v1/posts", auth, postRoutes)
// app.use('/api/v1/search', require('./server/routes/searchRoutes'))/ cleaner

//! App Startup
connectDB();
nextApp.prepare().then(() => {
  app.all("*", (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server listening at ${PORT}`);
  });
});
