const express = require("express");
const router = express.Router();
const{addMenu,getAllMenu}  = require("../../controller/admin/MenuController")
const { isAuthenticatedUser, isAdminRole } = require("../../helpers/authMiddleWare");


router.route("/menu").post(isAuthenticatedUser,isAdminRole("admin"),addMenu);
router.route("/menu").get(getAllMenu);

module.exports = router;