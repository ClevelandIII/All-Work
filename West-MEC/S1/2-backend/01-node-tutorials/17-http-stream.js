const http = require("http");
const fs = require("fs");

http
  .createServer()
  .on("request", (req, res) => {
    if (req.url === "/write") {
      //   res.end("testing");
      res.write("more: ", "utf-8", () => {
        setTimeout(() => {
          res.end("timing");
        }, 2000);
      });
      //   res.end("testing");
    } else if (req.url === "/stream") {
      const fileStream = fs.createReadStream("./content/second.md", "utf-8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
      fileStream.on("error", (err) => {
        res.end(err);
      });
    } else {
      res.end("404");
    }
  })
  .listen(3000, () => {
    console.log(`server running at port 3000`);
  });

//make sure that if you make an anonomys function that the end is in the function or else the server will crash because its trying to add after it ended
//if you want html to work without express then you need to only use html.