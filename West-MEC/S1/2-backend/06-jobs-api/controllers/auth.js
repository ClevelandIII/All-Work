const User = require("../Models/User_Schema");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const { BadRequest, Unauth } = require("../error");

const register = async (req, res) => {
  //hashing - passing a string through a formula to get back a completely different string. Hashes are one way, once its been hashed you cant unhash it.
  //salting - when we create a random number of bits and add it to the string before hashing. (1024x more complex)
  //pepering - adding an extra letter to the end of the password (50x more complex)

  // const {password} = req.body
  // const salt = await bcrypt.genSalt(10)
  // const hashpass = await bcrypt.hasg(password, salt)

  const newUser = await User.create(req.body);
  const token = await newUser.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: newUser.name, userID: newUser._id }, token });
};
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequest("must provide an email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauth("Invalid Credentials");
  }
  const isPassCorrect = await user.comparePassword(password);
  if (!isPassCorrect) {
    throw new Unauth("Invalid Credentials");
  }

  const token = user.createJWT();

  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name, userID: user.id }, token });
};

module.exports = { register, login };
