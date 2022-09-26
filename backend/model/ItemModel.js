const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

varients :[],

prices : [],

  desc: {
    type: String,
    required: true,
  },

  image:{
    type:String,
    required:true,
  },
},{timestamps:true});

const items = mongoose.model("Items", itemSchema);

module.exports = items;
