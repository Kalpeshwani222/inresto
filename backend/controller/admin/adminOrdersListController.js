const Order = require("../../model/orderModel");
const eventEmitter = require("../../helpers/eventEmit");
const createError = require("http-errors");

//order list
const orderList = async (req, res, next) => {
  try {
    const { status } = req.query;

    let query = {};

    if (status) {
      query.status = status;
    }
    const orders = await Order.find(query)
      .select("-orderItems")
      .populate({
        path: "user",
        select: "-password",
      })
      .sort({ $natural: -1 });
    res.send(orders);
  } catch (error) {
    next(error);
  }
};

const orderDetails = async (req, res, next) => {
  try {
    if (!req.params.id) throw createError.NotFound(`Not valid ID`);

    const order = await Order.findById(req.params.id);

    if (!order) throw createError.NotFound(`Not valid ID`);

    const ordersdetails = await Order.find({ _id: req.params.id })
      .populate({
        path: "orderItems.product",
      })
      .populate({
        path: "user",
        select: "name email",
      });
    res.send(ordersdetails);
  } catch (error) {
    next(error);
  }
};
const updateOrder = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(403).json({ message: "Not true" });
  }
  try {
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
    eventEmitter.emit("orderUpdated", { updatedData: updatedData });
    // console.log(updatedData._id);

    return res.status(200).json({ message: "OK", updatedData });
  } catch (error) {
    next(error);
  }
};

module.exports = { orderList, updateOrder, orderDetails };
