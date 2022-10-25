// const Table = require("../../model/TablesModel");
 const Table = require("../../model/TablesModel");


// const tables = [   
//         {tableno:1,status:'free'},
//         {tableno:2,status:'free'},
//         {tableno:3,status:'occupied'},
//         {tableno:4,status:'free'},
//         {tableno:5,status:'free'},
//         {tableno:6,status:'free'},
//         {tableno:7,status:'free'},
//         {tableno:8,status:'occupied'},
//         {tableno:9,status:'free'},
//         {tableno:10,status:'occupied'},
//         ];


//add the new Table 
const addTable = async (req, res) => {
  //  Table.insertMany(tables).then(r=>console.log('done'))

  res.json("Table Added");
};


//Get All Tables
const getAllTables = async (req, res) => {
  const tables = await Table.find();
  res.json(tables);
};

module.exports = { addTable, getAllTables };
