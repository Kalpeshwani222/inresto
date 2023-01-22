const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {  type: String,  required: true,},

    varients: [],
    
        price: { type: Number, required: true },

    prices: [],

    desc: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    ratings:{type:Number, default:0},
    numReviews: { type: Number, default:0 },
    reviews:[
      {
        // user: {type:mongoose.Schema.ObjectId, ref:"user", required:true},
        // name:{type:String,required:true},
        rating:{type:Number, required:true},
        Comment:{type:String, required:true},

      }
    ]
  },
  { timestamps: true }
);

const items = mongoose.model("Items", itemSchema);

module.exports = items;
