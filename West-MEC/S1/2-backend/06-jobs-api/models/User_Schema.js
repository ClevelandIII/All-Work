const mongoose = require("mongoose");
const { stringify } = require("querystring");

const UserSchema = new mongoose.Schema({
  Company: {
    type: String,
    required: [true, "Must enter a  name"],
    match: /^.{3,50}$/,
  },
  Email: {
    type: String,
    required: [true, "Must enter a email"],
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    unique: true,
  },
  Password: {
      type: String,
      required: [true, "Must enter a password"],
      match: /^.{6,}$/,
  }
});

module.exports = mongoose.model('User', UserSchema)