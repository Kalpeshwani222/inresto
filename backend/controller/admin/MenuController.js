const Item = require("../../model/ItemModel");
const apiFeatures = require("../../utils/apiFeatures");

const items = [
  {
    name: "Veg Noodles",
    image:
      "https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b106403-9276-4c02-b446-1200a181733f/1667829777922-jpeg",
    price: 100,
    desc: "Veg Noodles With The Best Taste Ever 🐱",

    typeProd: "veg",

    category: "Noodles",
  },

  {
    name: "Maggie",
    image:
      "https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b106403-9276-4c02-b446-1200a181733f/1667829777922-jpeg",
    price: 150,
    desc: "maggie With The Best Taste Ever 🐱",

    typeProd: "veg",

    category: "Noodles",
  },

  {
    name: "Frid Rice",
    image:
      "https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b106403-9276-4c02-b446-1200a181733f/1667829777922-jpeg",
    price: 300,
    desc: "Fride Rice 🐱",

    typeProd: "veg",

    category: "Fride",
  },
];

//add the Menu item
const addMenu = async (req, res) => {
  Item.insertMany(items).then((r) => console.log("done"));

  res.json("Add product");
};

//Get All Menu Items

const getAllMenu = async (req, res) => {
   const items = await Item.find();
  res.json(items);
  //one page data
  // const resultPerPage = 1;
  // const itemCount = await Item.countDocuments();

  // const ApiFeature = new apiFeatures(Item.find(), req.query).search().filter();

  // let items = await ApiFeature.query;
  // let filteredItemsCount = items.length;

  // ApiFeature.pagination(resultPerPage);
  // // const items = await Item.find();
  // // items = await ApiFeature.query;
  // res.json({ items, itemCount, resultPerPage, filteredItemsCount });


};

module.exports = { addMenu, getAllMenu };
