const Item = require("../../model/ItemModel");
const apiFeatures = require("../../utils/apiFeatures");

const items = [

  {
    name: "Veg Noodles",
    desc: "Veg Noodles With The Best Taste Ever 🐱",
    category:'Noodles',
    image:
      "https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b106403-9276-4c02-b446-1200a181733f/1667829777922-jpeg",
    varients: ["half", "full"],
    price:100,
    prices: [
      {
        // half: 99,
        full: 199,
      },
    ],
    rating: 4.5,
    numReviews:10
  },

  {
    name: "Veg Fried Rice",
    desc: "hat's Fired 'Fried' Rice 🙃",
    category:'Rice',
    image: 'https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/b83676c1-8f24-4ed5-a5d4-44bd05e5df25/1667831423042-jpeg',
     varients: ["half", "full"],
    price:150,
     prices: [
      {
        // half: 60,
        full: 120,
      },
    ],
     rating: 3,
    numReviews:5

  },

  {
    name: "Mind Refreshing Pizza Group Study Offer",
    desc: "Cheese Burst Pizza. Refresh Your Mind Specially while you have exams.",
    category:'Pizza',
    image: 'https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-us.s3.amazonaws.com/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1646234269195-da91ce0d-fdc4-4551-a7b6-698ffe2d7642.jpeg',
     varients: ["half", "full"],
    price:200,
     prices: [
      {
        // half: 50,
        full: 109,
      },
    ],
    rating: 2,
    numReviews:12
  },

  {
    name: "Classic Veggie Burger 🍔",
    desc: "Made With Green Veggies 🍔 Try Our Best Burger Here",
    category:'Burger',
    image:'https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-us.s3.amazonaws.com/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1645710406220-abf5596a-66c3-4257-9e39-db5110ac51f5.jpeg',
    varients: ["half", "full"],
    price:250,
    prices: [
      {
        // half: 20,
        full: 50,
      },
    ],
    rating: 5,
    numReviews:7
  },

  {
    name: "Veggie Burger 🍔",
    desc: "Made With Green Veggies",
    category:'Burger',
    image:'https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-us.s3.amazonaws.com/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1645710406220-abf5596a-66c3-4257-9e39-db5110ac51f5.jpeg',
    varients: ["half", "full"],
    price:300,
    prices: [
      {
        // half: 20,
        full: 50,
      },
    ],
    rating: 5,
    numReviews:7
  },
];

//add the Menu item
const addMenu = async (req, res) => {
  Item.insertMany(items).then(r=>console.log('done'))

  res.json("Add product");
};

//Get All Menu Items

const getAllMenu = async (req, res) => {
  //one page data
  const resultPerPage = 2;
  const itemCount = await Item.countDocuments();


  const ApiFeature = new apiFeatures(Item.find(),req.query)
  .search()
  .filter()
  .pagination(resultPerPage);
  // const items = await Item.find();
   const items = await ApiFeature.query;
  res.json({items,itemCount});
};


//Filter Menu Items

const filterMenu = async (req, res) => {
  
   const { query } = req;

    const category = query.category || '';
    const price = query.price || '';
    const rating = query.rating || '';
    const searchQuery = query.query || '';
     

    const queryFilter =
      searchQuery && searchQuery !== 'all'
        ? {
            name: {
              $regex: searchQuery,
              $options: 'i',
            },
          }
        : {};


     const categoryFilter = category && category !== 'all' ? { category } : {};
    
     const ratingFilter =
      rating && rating !== 'all'
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};

      const priceFilter =
      price && price !== 'all'
        ? {
            // 1-50
            price: {
              $gte: Number(price.split('-')[0]),
              $lte: Number(price.split('-')[1]),
            },
          }
        : {};

const products = await Item.find({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    });

    const countProducts = await Item.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    });
    res.send({
      products,
      countProducts,
    });
    

};

const menuCategory = async (req, res) => {
  const categories = await Item.find().distinct('category');
  res.send(categories);
};



module.exports = { addMenu, getAllMenu, filterMenu ,menuCategory};
