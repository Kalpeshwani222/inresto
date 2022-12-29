const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {  type: String,  required: true,},

    varients: [],

    prices: [],

    desc: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number },
    numReviews: { type: Number },
  },
  { timestamps: true }
);

const items = mongoose.model("Items", itemSchema);

module.exports = items;
