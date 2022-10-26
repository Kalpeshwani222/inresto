const Order = require("../../../model/orderModel");
const Table = require("../../../model/TablesModel");

const createOrder = async (req, res) => {
  const { currentUser, cartItems, subTotal, tableno } = req.body;

  try {
    const table = await Table.findOne({ tableno: Number(tableno) });

    //table not found
    if (!table) {
      console.log("table no not found");
      return res.status(400).json({
        message: "table not found",
      });
    } else {
      //table found then change the table status

      if (table.status == "occupied") {
        return res.status(403).json({
          message: "Table already occupied",
        });
      }

      //change the table status as occupied
      table.status = "occupied";
      await table.save();
    }

    const newOrder = await new Order({
      name: currentUser.name,
      email: currentUser.email,
      userId: currentUser._id,
      tableno: tableno,
      orderItems: cartItems,
      orderAmount: subTotal,
    }).save();

    //emit event
    const eventEmitter = req.app.get("eventEmitter");
    eventEmitter.emit("orderPlaced", newOrder);

    console.log(newOrder);

    res.status(201).json({
      message: "success",
      data: newOrder,
    });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const getOrder = async (req, res) => {
  const { userId } = req.body;

  try {
    const orders = await Order.find({ userId });
    res.send(orders);
  } catch (error) {
    // res.status(400).send({
    //   message: "something went wrong",
    //   error : error.stack,
    // });
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