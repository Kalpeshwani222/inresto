const Order = require("../../model/orderModel");
const eventEmitter = require('../../helpers/eventEmit');

const orderList = async (req, res) => {
  try {
    const orders = await Order.find().sort({$natural:-1});
    res.send(orders);
  } catch (error) {
    res.status(400).send({
      message: "something went wrong",
      error: error.stack,
    });
  }
};

const updateOrder = async (req, res) => {
  if (!req.params.id) {
    return res.status(403).json({ message: "Not true" });
  }
  try {
    // console.log(req.params.id);
    // console.log(req.body.status);

    const updatedData = await Order.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: { status: req.body.status },
      },
      {
        new: true,
      }
    );

    //Emit event
    // const eventEmitter = req.app.get('eventEmitter');
    eventEmitter.emit('orderUpdated', { updatedData :updatedData})
    // console.log(updatedData._id);
    
    return res.status(200).json({ message : "OK", updatedData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { orderList, updateOrder };
