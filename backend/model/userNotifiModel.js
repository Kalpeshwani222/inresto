const mongoose = require("mongoose");

const userNotifiSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  orderId : {
    type:String,
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userNoti = mongoose.model("userNotifications", userNotifiSchema);

module.exports = userNoti;
