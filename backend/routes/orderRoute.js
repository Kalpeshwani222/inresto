const express = require("express");
const router = express.Router();
const {createOrder, getOrder,getSingleOrder}  = require("../controller/orders/orderController")

// create a new order
router.route("/neworder").post(createOrder);
//display all the orders in users 
router.route("/getorders").post(getOrder);
//single order
router.route("/:id").get(getSingleOrder);


module.exports = router;