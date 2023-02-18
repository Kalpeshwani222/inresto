const UserNotifi = require("../model/userNotifiModel");
const eventEmitter = require("../helpers/eventEmit");


const userOrderNotification = async (notifiData) => {
    
  const res = await new UserNotifi({
    user: notifiData.userId,
    message: `your order ${notifiData.status}`,
    orderId: notifiData._id
  }).save();

   //emit event order
     eventEmitter.emit("orderNotification", res);
};



module.exports = { userOrderNotification };
