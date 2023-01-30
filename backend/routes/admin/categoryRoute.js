const express = require("express");
const router = express.Router();
const { addCategory, getCategory } = require("../../controller/admin/CategoryController");

router.route("/category").post(addCategory);
router.route("/category").get(getCategory);


module.exports = router;
