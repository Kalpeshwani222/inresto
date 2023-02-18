const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");
const createError = require("http-errors");

//protected routes (only login user can access)
const isAuthenticatedUser = async (req, res, next) => {
  if (!req.headers["authorization"]) {
    return next(createError.Unauthorized("Unauthorized user"));
  }

  try {
    const authHeader = req.headers["authorization"];
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];

    const decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = await User.findById(decodedData.userId);
    console.log(req.user);
    next();
  } catch (error) {
    return next(createError.Unauthorized(error));
  }
};


//admin role only can access
const isAdminRole = (...roles) => {
    return(req,res,next) =>{
        if(!roles.includes(req.user.role)){
            throw createError.Forbidden('not allow to access this resources')
        }    
        next();
    }
}

module.exports = { isAuthenticatedUser,isAdminRole };
