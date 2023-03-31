const express = require("express");
const router = express.Router();
 const{orderList,updateOrder,orderDetails}  = require("../../controller/admin/adminOrdersListController")


router.route("/orders").get(orderList);
router.route("/orders/:id").get(orderDetails);
router.route('/:id').put(updateOrder);

module.exports = router;