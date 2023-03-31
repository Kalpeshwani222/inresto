const Order = require("../../../model/orderModel");
const Table = require("../../../model/TablesModel");
const eventEmitter = require("../../../helpers/eventEmit");
const createError = require("http-errors");

const createOrder = async (req, res, next) => {
  const { currentUser, cartItems, subTotal, tableno } = req.body;

  // Extract the product IDs and quantities from the selected product data
  const orderItems = cartItems.map((product) => ({
    product: product._id,
    quantity: product.quantity,
  }));

  try {
    const table = await Table.findOne({ tableno: Number(tableno) });

    //table not found
    if (!table) {
      throw createError.NotFound("Opps Table not found");
    }
    if (table.status === "occupied")
      throw createError.Conflict("Opps Table Occupied");

    //change the table status as occupied
    table.status = "occupied";
    let tableData = await table.save();

    const newOrder = await new Order({
      // name: currentUser.name,
      // email: currentUser.email,
      // userId: currentUser._id,
      user: currentUser._id,
      tableno: tableno,
      orderItems: orderItems,
      orderAmount: subTotal,
    }).save();

    //emit event
    // const eventEmitter = req.app.get("eventEmitter");
    //order
    eventEmitter.emit("orderPlaced", newOrder);

    //table
    if (table) {
      eventEmitter.emit("tableBook", table);
    }

    res.status(201).json({
      message: "order placed successfully",
      data: newOrder,
    });
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res) => {
  const { userId } = req.body;
try {
    const orders = await Order.find({ user:userId }).select('-orderItems')
      .populate({
        path: "user",
        select: "-password",
      })
      .sort({ $natural: -1 });;
    res.send(orders);
    // const user = await 
    // res.send(req.body);
  } catch (error) {
    res.send(error);
  }
};

//display the user single order
const getSingleOrder = async (req, res) => {
  if (!req.params.id) {
    return res.status(404).json({ message: "NOT VALID" });
  }
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).json({ message: "ORDER not found" });
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports = { createOrder, getOrder, getSingleOrder };
