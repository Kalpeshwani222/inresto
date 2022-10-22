const Order = require("../../model/orderModel");

const orderList = async (req, res) => {
 try {
   const orders =await Order.find();
   res.send(orders);
 } catch (error) {
    res.status(400).send({ 
        message: "something went wrong",
        error : error.stack,
      });
 }
};

module.exports = { orderList};