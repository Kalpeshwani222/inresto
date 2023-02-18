const express = require("express");
const router = express.Router();
const { addCategory, getCategory } = require("../../controller/admin/CategoryController");
const { isAuthenticatedUser, isAdminRole } = require("../../helpers/authMiddleWare");
// const {VerifyAccessToken,VerifyAdminRole} = require("../../helpers/jwt_helper");


router.route("/category").post(isAuthenticatedUser,isAdminRole("admin"),addCategory);
router.route("/category").get(getCategory);


module.exports = router;
