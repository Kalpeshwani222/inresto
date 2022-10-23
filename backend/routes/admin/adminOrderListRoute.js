const express = require("express");
const router = express.Router();
 const{orderList,updateOrder}  = require("../../controller/admin/adminOrdersListController")


router.route("/orders").get(orderList);

router.route('/:id').put(updateOrder);

module.exports = router;