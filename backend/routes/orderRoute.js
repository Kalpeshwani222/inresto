const express = require("express");
const router = express.Router();
const {createOrder, getOrder}  = require("../controller/orders/orderController")


router.route("/neworder").post(createOrder);
router.route("/getorders").post(getOrder);


module.exports = router;