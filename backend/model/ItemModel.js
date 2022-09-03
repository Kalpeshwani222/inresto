const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  image:{
    type:String,
    required:true,
  },

  price: {
    type: Number,
    required: true,
  },

  // user:{
  //     type:
  // }
});

const items = mongoose.model("Items", itemSchema);

module.exports = items;
