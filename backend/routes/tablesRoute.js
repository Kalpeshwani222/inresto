const express = require("express");
const router = express.Router();
const{addTable,getAllTables}  = require("../controller/TableController")


router.route("/add-table").post(addTable);
router.route("/get-all-tables").get(getAllTables);

module.exports = router;