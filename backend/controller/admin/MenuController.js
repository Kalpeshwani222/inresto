const Item = require("../../model/ItemModel");
const Category = require("../../model/categoryModel");
const createError = require("http-errors");

//add the Menu item
const addMenu = async (req, res, next) => {
  // Item.insertMany(items).then((r) => console.log("done"));
  // res.json("Add product");

  try {
    const category = await Category.findById(req.body.category);

    if (!category) throw createError.BadRequest("Invalid Category");

    const item = new Item({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      desc: req.body.desc,
      category: req.body.category,
      typeProd: req.body.typeProd,
    });

    const saveItem = await item.save();
    res.send(saveItem);
  } catch (error) {
    next(error);
  }
};

//Get All Menu Items
const getAllMenu = async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 8;

    const search = req.query.search || "";
    let sort = req.query.sort || "rating";
    let category = req.query.category || "All";

    // const categoryOptions = [
    //   "63d7a422defaeb048376197f",
    //   "63d7a479defaeb0483761981",
    //   "63d7a57bdefaeb0483761997",
    //   "63d7a58fdefaeb0483761999",
    // ];

    const categories = await Category.find({}, "_id");
    const categoryOptions = categories.map((category) => category._id);

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
      sortBy[sort[0]] = "asc"; //default sort
    }

    const items = await Item.find({ name: { $regex: search, $options: "i" } })
      .populate("category")
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
