const mongoose = require("mongoose");

const tablesSchema = new mongoose.Schema({
  tableno: {
    type: Number,
    required: true,
  },
  status:{
    type:String,
    enum:['occupied','free'],
    default:'free'
  }
});

const tables = mongoose.model("Table", tablesSchema);

module.exports = tables;