const User = require("../../model/UserModel");
// const bcrypt = require("bcrypt");
// const generateToken = require("../utils/generateToken");
// const Token = require("../model/token");
// const crypto = require("crypto");
// const resetpassToken = require("../model/resetpass");

//register
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(409).json({ message: "All are required" });
  }
  const emailCheck = await User.findOne({ email });
  if (emailCheck) {
    return res.status(409).json({ message: "Email already used" });
  }

  const newUser = new User({ name, email, password });

  try {
    newUser.save();
    return res.status(201).json({
      success: true,
      message: "Register success",
    });

    // const hashPassword = await bcrypt.hash(password, 10);

    // //save user
    // let user = await User.create({
    //   name,
    //   email,
    //   password: hashPassword,
    // });

    // //save token to database
    // const token = await new Token({
    //   userId: user._id,
    //   token: crypto.randomBytes(32).toString("hex"),
    // }).save();

    // return res.status(201).json({
    //   message: "Email send success,please verify the email",
    //   _id: user._id,
    //   name: user.name,
    //   email: user.email,
    // });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

//login
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!email || !password) {
    return res.status(401).json({ message: "All fields are required" });
  }

  //email
  if (!user) {
    return res.status(401).json({ message: "Email not found" });
  }

  try {
    const presentUser = await User.findOne({ email, password });
    const currentUser = {
      name: presentUser.name,
       email: presentUser.email,
        _id: presentUser._id,
    };

    res.status(200).send(currentUser);
  } catch (error) {
    return res.status(400).json({ message: "Error Occured" });
  }
};

module.exports = { userLogin, userRegister };
