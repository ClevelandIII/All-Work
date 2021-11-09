const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: [
        "ikea",
        "ashley",
        "amazon",
        "walmart",
        "caressa",
        "marcos",
        "apple bees",
        "liddy",
      ],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model('Product', productSchema)