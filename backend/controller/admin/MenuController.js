const Item = require("../../model/ItemModel");

const items = [
  // {
  //   name: "Veg Noodles",
  //   image:
  //     "https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b106403-9276-4c02-b446-1200a181733f/1667829777922-jpeg",
  //   price: 100,
  //   desc: "Veg Noodles With The Best Taste Ever 🐱",

  //   typeProd: "veg",

  //   category: "Noodles",
  // },

  // {
  //   name: "Maggie",
  //   image:
  //     "https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b106403-9276-4c02-b446-1200a181733f/1667829777922-jpeg",
  //   price: 150,
  //   desc: "maggie With The Best Taste Ever 🐱",

  //   typeProd: "veg",

  //   category: "Noodles",
  // },

  // {
  //   name: "Frid Rice",
  //   image:
  //     "https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b106403-9276-4c02-b446-1200a181733f/1667829777922-jpeg",
  //   price: 300,
  //   desc: "Fride Rice 🐱",

  //   typeProd: "veg",

  //   category: "Fride",
  // },

  {
    name: "Veg Noodles",
    image:
      "https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b106403-9276-4c02-b446-1200a181733f/1667829777922-jpeg",
    price: 100,
    desc: "Veg Noodles With The Best Taste Ever ðŸ±",
    category: "snacks",
    typeProd: "veg",
  },

  {
    name: "Veg Grilled Sandwich",
    desc: "Boiled potatoes, fresh onions, cucumbers, tomatoes & Green chutney are layered with a sprinkle of ground spices.ðŸ±",
    category: "snacks",
    image:
      "https://b.zmtcdn.com/data/dish_photos/c57/3ae7e028f80d5b4bf99aadfec6e2cc57.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 150,
    typeProd: "veg",
  },
  {
    name: "Peri Peri Mayo Fries",
    desc: "Deep fried, very thin, slices of potato garnished with peri peri mayo & optional cheese.",
    category: "snacks",
    image:
      "https://b.zmtcdn.com/data/dish_photos/348/060da6aae3faf8cce7cd2258ad82d348.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 200,
    typeProd: "veg",
  },

  {
    name: "Veg Cheese Grilled Sandwich",
    desc: "Yummy, cheesy, tasty vegetable cheese sandwich made with mixed veggies.",
    category: "snacks",
    image:
      "https://b.zmtcdn.com/data/dish_photos/4d6/9a86032c47540a2f1f199b673fab84d6.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 120,
    typeProd: "veg",
  },
  {
    name: "Mumbai Bhel",
    desc: "popular Indian snack made with puffed rice, vegetables like boiled potatoes, tomatoes & onions, flavored with tangy chutneys.",
    category: "snacks",
    image:
      "https://b.zmtcdn.com/data/dish_photos/d26/36b0fa851915df8dfab1779850cfad26.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 90,
    typeProd: "veg",
  },
  {
    name: "Peppy Paneer Pizza",
    desc: "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
    category: "Pizza",
    image:
      "https://b.zmtcdn.com/data/dish_photos/410/06c9dcc4f29d4c1ef77171844560a410.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 80,
    typeProd: "veg",
  },

  {
    name: "Moroccan Spice Pasta Pizza - Veg",
    desc: "A pizza loaded with a spicy combination of Harissa sauce and delicious pasta.",
    category: "Pizza",
    image:
      "https://b.zmtcdn.com/data/dish_photos/7bf/5c4d9929d3455665e9410609eea297bf.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 70,
    typeProd: "veg",
  },
  {
    name: "Margherita Pizza",
    desc: "Classic delight with 100% real mozzarella cheese.",
    category: "Pizza",
    image:
      "https://b.zmtcdn.com/data/dish_photos/f47/db2fb46200a9d41110d7a552e4f69f47.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 100,
    typeProd: "veg",
  },

  {
    name: "Capsicum",
    desc: "Fresh & crisp capsicum for the perfect crunch in pizza.",
    category: "Pizza",
    image:
      "https://b.zmtcdn.com/data/dish_photos/1e6/c606fc4d04f2a99162885e47224521e6.png?fit=around|130:130&crop=130:130;*,*",
    price: 20,
    typeProd: "veg",
  },
  {
    name: "Egg Biryani",
    desc: "Egg biryani is a splendorous rice preparation, replete with the magic of Indian spices and the richness of masaledar boiled eggs.",
    category: "Biryani",
    image:
      "https://b.zmtcdn.com/data/dish_photos/d03/9aa7e841f2aec9f6bb22a523243eed03.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 30,
    typeProd: "nonVeg",
  },

  {
    name: "Hyderabadi Chicken Dum Biryani",
    desc: "Hyderabadi Chicken Dum Biryani is an aromatic, mouth watering and authentic Indian dish with layers of fluffy rice and Chicken, fragrant spices and fried onions made with Exclusive Hyderabadi flavour in dum.",
    category: "Biryani",
    image:
      "https://b.zmtcdn.com/data/dish_photos/d03/9aa7e841f2aec9f6bb22a523243eed03.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 100,
    typeProd: "nonVeg",
  },

  {
    name: "Chicken Tandoori Leg",
    desc: "Tandoori chicken Leg is a chicken dish prepared by roasting chicken leg marinated in yoghurt and spices in a tandoor.",
    category: "Tandoori",
    image:
      "https://b.zmtcdn.com/data/dish_photos/444/3758b069b330c3cce40ec4b645be8444.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 50,
    typeProd: "nonVeg",
  },
  {
    name: "Veg Manchurian",
    desc: "Veg Manchurian is a tasty Indo Chinese dish of fried veggie balls in a spicy, sweet and tangy sauce.",
    category: "Manchurian",
    image:
      "https://b.zmtcdn.com/data/dish_photos/e77/67f0bb8920d6993fab0aea8236f3be77.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 50,
    typeProd: "veg",
  },

  {
    name: "Basmati Jeera Rice",
    desc: "Jeera rice is a flavored Indian rice dish made by cooking basmati rice with ghee, cumin & other fragrant spices.",
    category: "Rice",
    image:
      "https://b.zmtcdn.com/data/dish_photos/f38/d475973f2e6e7ebf2d715b9c16b42f38.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 50,
    typeProd: "veg",
  },

  {
    name: "Paneer Butter Masala",
    desc: "Mildly sweet and spicy taste with the goodness of fresh cream and butter topping with moist paneer.",
    category: "Paneer",
    image:
      "https://b.zmtcdn.com/data/dish_photos/053/50684780c636c5cd2207903f903c8053.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 50,
    typeProd: "veg",
  },

  {
    name: "Paneer Tikka Masala",
    desc: "cubes of paneer (Indian cottage cheese), onions and peppers are marinated with yogurt and spices, grilled and then tossed in a creamy tomato based curry. This dish goes extremely well with butter naan or paratha or basmati rice.",
    category: "Paneer",
    image:
      "https://b.zmtcdn.com/data/dish_photos/18c/8ca550a170558a3982968c64a600518c.jpg?fit=around|130:130&crop=130:130",
    price: 150,
    typeProd: "veg",
  },

  {
    name: "Paneer Chilly",
    desc: "Chilli Paneer is a popular Indo-Chinese dish where cubes of fried crispy paneer are tossed in a spicy sauce made with soy sauce, vinegar, chili",
    category: "Paneer",
    image:
      "https://b.zmtcdn.com/data/dish_photos/287/5a9014f484bf824b234339feb921f287.jpg?fit=around|130:130&crop=130:130;*,*",

    price: 180,
    typeProd: "veg",
  },

  {
    name: "Veg Hyderabadi Biryani",
    desc: "A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice.",
    category: "Biryani",
    image:
      "https://b.zmtcdn.com/data/dish_photos/81e/259b82ed3defc35fe2dcc37de4a8e81e.jpg?fit=around|130:130&crop=130:130;*,*https://b.zmtcdn.com/data/dish_photos/81e/259b82ed3defc35fe2dcc37de4a8e81e.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 180,
    typeProd: "veg",
  },

  {
    name: "Dal Makhani",
    desc: "Dal Makhani is one of the most popular lentil recipes made with Whole Black Lentils",
    category: "Rice",
    image:
      "https://b.zmtcdn.com/data/dish_photos/b05/2209d2ec20b0c0c485c817d5966c5b05.jpg?fit=around|130:130&crop=130:130;*,*",
    price: 180,
    typeProd: "veg",
  },
];

//add the Menu item
const addMenu = async (req, res) => {
  Item.insertMany(items).then((r) => console.log("done"));

  res.json("Add product");
};

//Get All Menu Items

const getAllMenu = async (req, res) => {
  // const items = await Item.find();
  // res.json(items);

  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 6;

    const search = req.query.search || "";
    let sort = req.query.sort || "rating";
    let category = req.query.category || "All";

    const categoryOptions = [
      "snacks",
      "Pizza",
      "Biryani",
      "Tandoori",
      "Manchurian",
      "Rice",
      "Paneer",
    ];

    // filter category
    category === "All" 
			? (category = [...categoryOptions])
			: (category = req.query.category.split(","));

    //sort
		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
    let sortBy = {};
    if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";   //default sort
		}

    const items = await Item.find({ name: { $regex: search, $options: "i" } })
			.where("category")
			.in([...category])
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);


      const total = await Item.countDocuments({
			category: { $in: [...category] },
			name: { $regex: search, $options: "i" },
		});

      const response = {
			total,
			page: page + 1,
			limit,
			items,
		};
res.status(200).json(response);

  } catch (error) {
    console.log(error);
  }
};

module.exports = { addMenu, getAllMenu };
