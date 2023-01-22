const express = require("express");
const router = express.Router();
const {createProductReview}  = require("../../../controller/user/review/reviewController")


// create a new review
router.route("/newreview").put(createProductReview);



module.exports = router;