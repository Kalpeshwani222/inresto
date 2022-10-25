const express = require("express");
const router = express.Router();
const {userRegister,userLogin} = require('../../controller/user/UserAuthController')


router.route("/login").post(userLogin);
router.route("/register").post(userRegister);


module.exports = router;