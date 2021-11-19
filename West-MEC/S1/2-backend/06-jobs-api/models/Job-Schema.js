const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: { 
      type: String,
      required: [true, "Must enter a company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Must enter a posision"],
      maxlength: 100,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["interview", "declined", "pending"]
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
