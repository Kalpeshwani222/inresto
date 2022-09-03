const Item = require("../model/ItemModel");

// const items = [
//         {
//           name:"Panipuri",
//           desc:"Potato, onion, chickpeas, coriander chutney stuffed crispy puri drenched in sour and spicy mint flavored water [pudina pani].",
//           image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Panipuri03.jpg/128px-Panipuri03.jpg",
//           price:40
//         },

//         {
//           name:"Masala Puri",
//           desc:"Panipuri's name varies depending on the region. In Maharashtra, it is known as Pani Puri",
//           image:"https://en.wikipedia.org/wiki/Masala_puri#/media/File:Masala_Puri_(Chaat).jpg",
//           price: 80
//         },

//         {
//           name:"Dal Khichdi",
//           desc:"A good combination of rice and pulses with spices.",
//           image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dall_Khichdi.jpg/330px-Dall_Khichdi.jpg",
//           price:100
//         }

//     ];

//add the Menu item
const addMenu = async (req, res) => {
  //Item.insertMany(items).then(r=>console.log('done'))

  res.json("Add product");
};

//Get All Menu Items

const getAllMenu = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

module.exports = { addMenu, getAllMenu };
