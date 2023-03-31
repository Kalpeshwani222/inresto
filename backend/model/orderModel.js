const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  tableno: {
    type: String,
    required: true,
  },

  //     table:{
  //     type:mongoose.Schema.ObjectId,
  //     ref:"Table",
  //     required:true
  // },

  // orderItems: [],

  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Items",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        // default: 1,
      },
    },
  ],

  orderAmount: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "Order Placed",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const order = mongoose.model("order", orderSchema);

module.exports = order;
