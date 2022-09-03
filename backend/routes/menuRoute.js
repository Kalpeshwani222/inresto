const express = require("express");
const router = express.Router();
const{addMenu,getAllMenu}  = require("../controller/MenuController")


router.route("/addmenu").post(addMenu);
router.route("/menu").get(getAllMenu);

module.exports = router;