const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: true,
    },
    tableno:{
        type:String,
        required:true,
    },

//     table:{
//     type:mongoose.Schema.ObjectId,
//     ref:"Table",
//     required:true
// },

    orderItems: [],

    orderAmount: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "order_placed",
    },
  },
  { timetamps: true }
);


const order = mongoose.model("order", orderSchema);

module.exports = order;