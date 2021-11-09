const mongoose = require("mongoose");
const { stringify } = require("querystring");

const productSchema = new mongoose.Schema({
  Company: {
    type: String,
    required: [true, "Must enter a company name"],
    match: /^.{0,50}$/,
  },
  Position: {
    type: String,
    required: [true, "Must enter a posision"],
    match: /^.{0,100}$/,
  },
  Status: {
    type: String,
    default: "pending",
    enum: {
      values: ["interview", "declined", "pending"],
    },
  },
  CreatedBy : {

  }
});

module.exports = mongoose.model('Job', productSchema)