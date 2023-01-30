const Category = require("../../model/categoryModel");
const createError = require("http-errors");

//add category
const addCategory = async (req, res, next) => {
  try {
    const { image, name } = req.body;
    if (!image || !name) {
      throw createError.BadRequest("all are required");
    }
    console.log(image,name);

    const category = new Category({
      image ,
      name,
    });

    const createdCate = await category.save();

    res.send(createdCate);
  } catch (error) {
    next(error);
  }
};



const getCategory = async (req, res, next) => {
  try {
   const categories = await Category.find();
  res.json(categories);

  } catch (error) {
    next(error);
  }
};

module.exports = { addCategory,getCategory };
