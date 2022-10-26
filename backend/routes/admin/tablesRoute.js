const express = require("express");
const router = express.Router();
const{addTable,getAllTables,freeTable}  = require("../../controller/admin/TableController")


router.route("/add-table").post(addTable);
router.route("/get-all-tables").get(getAllTables);
//free table
router.route('/free/:id').put(freeTable);



module.exports = router;