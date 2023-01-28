const User = require("../../model/UserModel");
const createError = require("http-errors");
const { userSchema, loginSchema } = require("../../helpers/validate_schema");
const {
  signAccessToken,
  VerifyAccessToken,
} = require("../../helpers/jwt_helper");
const Table = require("../../model/TablesModel");

//register
const userRegister = async (req, res, next) => {
  try {
    // const { name, email, password } = req.body;
    // if (!name || !email || !password) {
    //   throw createError.BadRequest();
    // }

    //joi validation
    const result = await userSchema.validateAsync(req.body);

    const doesExist = await User.findOne({ email: result.email });
    if (doesExist) {
      throw createError.Conflict(`${result.email} is already been register`);
    }

    const user = new User(result);

    const savedUser = await user.save();
    const accessToken = await signAccessToken(savedUser.id);
    return res.status(201).json({
      success: true,
      // message: "Register success",
      // user: savedUser,
      accessToken,
    });
  } catch (error) {
    if (error.isJoi === true) {
      error.status = 422;
      error.message = "something went wrong";
    }
    next(error);
  }
};

//login
const userLogin = async (req, res, next) => {
  try {
    //joi validation
    var result = await loginSchema.validateAsync(req.body);

    const user = await User.findOne({ email: result.email });
    if (!user) throw createError.NotFound("User not found");

    const isMatch = await user.isValidPassword(result.password);
    if (!isMatch) throw createError(401, "Username/password not valid");

    const accessToken = await signAccessToken(user.id);

    result["accessToken"] = accessToken;
    result["_id"] = user.id;
    result["name"] = user.name;
 
    res.send(result);
  } catch (error) {
    if (error.isJoi === true) {
      return next(createError(400, "Invalid username/password"));
    }
    next(error);
  }
};

//logout user
const logOutUser = async (req, res, next) => {
  try {
    const { table_no } = req.body;

    //check the table_no is present or not
    if (!table_no) throw createError.NotFound("You not any table occupied");

    //check the table_no is valid or not
    const findTableNO = await Table.findOne({ tableno: table_no });
    if (!findTableNO) throw createError.NotFound("Table not found");

    //table_no is valid update the table status
    const updatedTableStatus = await Table.findOneAndUpdate(
      { tableno: table_no },
      {
        $set: { status: "free" },
      },
      {
        new: true,
      }
    );

    return res.send(updatedTableStatus);
  } catch (error) {
    next(error);
  }
};

module.exports = { userLogin, userRegister, logOutUser };
