const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  // product basic info
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },

  //veg or nonveg
  typeProd: { type: String, required: true },

  //category
  // category: { type: String, required: true },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  //rating
  ratings: {
    type: Number,
    default: 0,
  },

  //review count
  numOfReviews: {
    type: Number,
    default: 0,
  },

  //reviews section user details
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const items = mongoose.model("Items", itemSchema);

module.exports = items;
