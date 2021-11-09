const { BadRequest } = require("../errors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  // throw new BadRequest('bad request')
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("Must enter a username and password");
  }

  //THE SECRET PASSWORD SHOULD BE VERY HARD TO GUESS AND 256 BITS LONG
  //THIS IS BAD!! ONLY FOR EXAMPLE!! THIS WILL COME FROM MONGO DB IN THE FUTURE.
  const id = new Date().getDate();

  //try to keep the payloads small for user experience
  //NEVER INCLUDE THE PASSWORD IN THE PAYLOAD

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  console.log(token);

  res.json({ msg: "success - user created", token });
};

const dashboard = (req, res) => {
  // const luckyNum = Math.floor(Math.random() * 255);
  // res.json({ msg: "success", secret: `Welcome lucky member ${luckyNum}` });
  res.json({ msg: req.user.username, secret: req.headers.authorization });
};

module.exports = { login, dashboard };
