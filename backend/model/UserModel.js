const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type:String,
      default : "user",
    }
    // verified :{
    //   type:Boolean,
    //   default:false,
    // },
  },
  {
    timestamps: true,
  }
);


userSchema.pre('save',async function (next){
    try {
        // console.log("call before saving a user");
        const salt = await bcrypt.genSalt(10);
        // console.log(this.email,this.password);
        const hashPass = await bcrypt.hash(this.password, salt);
        this.password = hashPass;
        next()
    } catch (error) {
        next(error)
    }
})



userSchema.methods.isValidPassword = async function(password){
    try {
       return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error
    }
}


const user = mongoose.model("User", userSchema);
module.exports = user;
