const connectDB = require("./db/connect");
require("./db/connect");
require("dotenv").config();
const express = require("express");
const app = express();

const taskRouter = require("./routers/tasksRouter");

app
  //front end
  .use(express.static("./public"))

  //middle ware
  .use([express.urlencoded({ extended: false }), express.json()])

  //routes
  .use("/api/v1/tasks", taskRouter);

//connect to server
//then start app on successful connection

const connect = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    //listen
    app.listen(3000, () => console.log(`server is listening at port 3000`));
  } catch (err) {
    console.log(err);
  }
};

connect();
