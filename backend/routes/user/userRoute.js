const express = require("express");
const router = express.Router();
const {userRegister,userLogin, logOutUser} = require('../../controller/user/UserAuthController')


router.route("/login").post(userLogin);
router.route("/register").post(userRegister);
router.route("/logout").post(logOutUser);


module.exports = router;