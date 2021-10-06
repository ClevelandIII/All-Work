const express = require("express");
const app = express();

app.use(express.static('./public'))

app.get("/", (req, res) => {
  console.log("home page");
  res.status(200).send("home page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
  console.log("server is listening at port 3000");
});

//app.get
//app.host
//app.put
//app.delete
//app.all
//app.use
//app.listen