const http = require("http");
const fs = require("fs");

http
  .createServer()
  .on("request", (req, res) => {
    if (req.url === "/") {
      res.write("welcome to the website.\n\n");
      res.write(
        "You lucky user will be put through a series of rigorous ...riddles... that will test your mind.\n\n"
      );
      res.write(
        "Should you find a way through the questions (hopefully without a cheat sheet or google), you will pass the quiz and be allowed to access secret information.\n\n"
      );
      res.end("To start the quiz, go to page start.");
    } else if (req.url === "/start") {
      res.write("The first riddle.\n \n \n");
      res.write(
        "What starts with four legs, then goes to two, then ends with three? \n \n\n"
      );
      res.end("Good Luck");
    } else if (req.url === "/start/hint") {
      res.write("Fine, sure, ill give you a hint...\n \n \n");
      res.write("Think animal \n \n \n");
      res.end("That should be enough...");
    } else if (req.url === "/human") {
      res.write("Not bad, but there are more riddles. \n \n \n");
      res.write("Kyle is to Kyle as Sass is to... \n \n \n");
      res.end("Good Luck");
    } else if (req.url === "/human/hint") {
      res.write("Fine, sure, ill give you a hint...\n \n \n");
      res.write("Think software \n \n \n");
      res.end("That should be enough...");
    } else if (req.url === "/s.a.a.s") {
      res.write("Yeah not that impressive.\n");
      res.write("If you want to prove your skill then try this. \n \n \n");
      res.write("Think\n");
      res.write("_____\n");
      res.write("|   |\n");
      res.write("_____\n \n\n");
      res.end("Good Luck");
    } else if (req.url === "/s.a.a.s/hint") {
      res.write("Fine, sure, ill give you a hint...\n \n \n");
      res.write("Think\n");
      res.write("_____\n");
      res.write("| B |\n");
      res.write("_____\n \n \n");
      res.end("That should be enough...");
    } else if (req.url === "/thinkOutsideTheBox") {
      res.write("Not bad! Unfortunately it gets harder from here.\n \n \n");
      res.write("01000111 01101111 01101111 01100100\n");
      res.write("01010111 01101111 01110010 01101011\n \n\n");
      res.end("Good Luck");
    } else if (req.url === "/thinkOutsideTheBox/hint") {
      res.write("Fine, sure, ill give you a hint...\n \n \n");
      res.write("G 01101111 01101111 01100100\n");
      res.write("01010111 01101111 01110010 01101011\n \n\n");
      res.end("That should be enough...");
    } else if (req.url === "/GoodWork") {
      res.write("Impressive... somewhat.\n");
      res.write("Now, figure out this pattern: \n \n \n");
      res.write("144 89 55 34 24...\n \n \n");
      res.end("Good Luck");
    } else if (req.url === "/GoodWork/hint") {
      res.write("Fine, sure, ill give you a hint...\n \n \n");
      res.write("144 - 89 = ? \n \n\n");
      res.end("That should be enough...");
    } else if (req.url === "/13853211") {
      res.write(`
      <style>
      img{
        width: 350px;
        heigth: 350px;
      }
      </style>
      <div>
      <p>Alright enough. You got here but you wont get past this.</p>
      <br>
      <img src='data:image/jpeg;base64,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' alt='moon'/>
      <img src='https://upload.wikimedia.org/wikipedia/commons/e/e3/Archive-ugent-be-0B4371EA-DD2B-11E1-8693-E85B8375B242_DS-5_%28cropped%29.jpg' alt='sonata'/>
      </div>
      <br></br>
      `);
      res.end("Good Luck. You might need it.");
    } else if (req.url === "/13853211/hint") {
      res.write(`
      <style>
      img{
        width: 350px;
        heigth: 350px;
      }
      </style>
      <div>
      <p>Sure sure, ugh...</p>
      <br>
      <img src='https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTI2NTgyMzIxOTcyMjU5NDU5/beethoven-600x600jpg.jpg' alt='beethoven'/>
      </div>
      <br></br>
      `);
      res.end("Cmon you are so close...");
    } else if (req.url === "/moonlightSonata") {
      res.write(`
      <style>
      img{
        width: 350px;
        heigth: 350px;
      }
      .test{
        text-align: center;
      }
      </style>
      <div class="test">
      <h1>Welcome to the Association</h1>
      <br>
      <p>You lucky user have been chosen to be the one who has to clean up my mess.</p>
      <p>My grandfather Old Man Jenkins has gave me the details to find some treasure. </p>
      <p>Inside the chest I found a picture of a shadowy figure.</p>
      <p>Immediately I knew something was wrong and I started to feel sleepy.</p>
      <p>When I woke up, I noticed that the picture I was holding lacked the shadow digure.</p>
      <p>I quickly ran to the door but the figure escaped before i could stop it.</p>
      <p>This is where you come in.</p>
      <h1>YOU USER</h1>
      <p>You can help me and a few other smarties try and defeat the monster.</p>
      <p>Clearly I didnt test strength, but that isnt important.</p>
      <p>YOU showed that you can solve riddles, think outside the box, translate languages, figure out math and know random trivia.</p>
      <p>With you and the others, we can start our secret group and find a way to catch the beast.</p>
      <p>Will you help me?</p>
      </div>
      <br></br>
      `);
      res.end("");
    } else if (req.url === "/yes") {
      res.end(
        "Good. Call my assistant Mr. Peck at (Mr. Peck Phone Number) to get intact."
      );
    } else if (req.url === "/no") {
      res.end(
        "Yeah, assembling a crew of random internet peeps to take down a magical beast isnt too smart..."
      );
    } else if (req.url === "/Kyle") {
      res.end("Hello there sir. I dont know why you typed this in but hey here we are.");
    } else {
      res.end("Yeah kid maybe this just isnt for you.");
    }
  })
  .listen(3000, () => {
    console.log(`server running at port 3000`);
  });
