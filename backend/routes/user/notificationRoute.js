const express = require("express");
const router = express.Router();
const { getAllNotifications } = require("../../controller/user/NotificationController")


router.route("/orderstatus/:userId").get(getAllNotifications);


module.exports = router;