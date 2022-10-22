const express = require("express");
const router = express.Router();
 const{orderList}  = require("../../controller/admin/adminOrdersListController")


router.route("/orders").get(orderList);

module.exports = router;