const http = require("http");

http
  .createServer()

  //on() is using the event emitter API
  //on emits an event and on requests we respond
  .on("request", (req, res) => {
    if (req.url === "/") res.end("Welcome");
    else res.end("404");
  })
  .listen(3000);
