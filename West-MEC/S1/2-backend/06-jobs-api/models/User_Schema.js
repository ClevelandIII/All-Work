const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config;
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must enter a  name"],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Must enter a email"],
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      "must provide a valid email",
    ],
    maxlength: 50,
    minlength: 3,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Must enter a password"],
    minlength: 6,
  },
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
  next();
});
 
UserSchema.methods.comparePassword = async function (submittedPass) {
  const isMatch = await bcrypt.compare(submittedPass, this.password);
  return isMatch;
};

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userID: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

module.exports = mongoose.model("User", UserSchema);
