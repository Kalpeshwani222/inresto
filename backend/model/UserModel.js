const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  
 name:{
      type: String,
      required: [true,'Name is required'],
    },
    email: {
      type: String,
      required: [true,'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true,'Password is required'],
    },
    // verified :{
    //   type:Boolean,
    //   default:false,
    // },
   
},{
        timestamps:true,
    }
);

const user = mongoose.model("User",userSchema);

 module.exports = user;