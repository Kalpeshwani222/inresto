const mongoose = require("mongoose");

// const itemSchema = new mongoose.Schema(
//   {
//     name: {  type: String,  required: true,},

//     varients: [],

//         price: { type: Number, required: true },

//     prices: [],

//     desc: { type: String, required: true },
//     category: { type: String, required: true },
//     image: { type: String, required: true },
//     ratings:{type:Number, default:0},
//     numReviews: { type: Number, default:0 },
//     reviews:[
//       {
//         // user: {type:mongoose.Schema.ObjectId, ref:"user", required:true},
//         // name:{type:String,required:true},
//         rating:{type:Number, required:true},
//         Comment:{type:String, required:true},

//       }
//     ]
//   },
//   { timestamps: true }
// );

// const items = mongoose.model("Items", itemSchema);

// module.exports = items;

const itemSchema = new mongoose.Schema({

  // product basic info
  name: {type: String,required: true,},
  image: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },

  //veg or nonveg
  typeProd : {type:String,required : true},
  
  //category
  category: { type: String, required: true },
  
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
