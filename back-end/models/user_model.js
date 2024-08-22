import mongoose from "mongoose";
const schema=mongoose.Schema
const userSchema=new  schema({
    name:String,
   email:String,
   password:String,
})
const userModel=mongoose.model("login-signup-user",userSchema)
export default userModel