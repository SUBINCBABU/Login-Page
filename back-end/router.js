import express from "express"
import userModel from "./models/user_model.js";
import crypto, { randomBytes } from "crypto"
import bcrypt from "bcrypt"

const userRouter = express.Router()
const hidden=crypto.randomBytes(64).toString("hex")
//console.log(hidden);
const current_user=[]
let salt=10
userRouter.post("/signup", async (req, res) => {

    
    const {email,password,name} = req.body
    let pwd=bcrypt.hashSync(password,salt)
    
    const users = new userModel({
        name: name,
        email:email,
        password:pwd

    })
  
    await users.save()
    res.json({status:"success"})

})

userRouter.post("/login", async (req, res) => {
    //console.log("new",req.body);
    const { email, name, password } = req.body
    const user = await userModel.findOne({ email: email })
   
    if (user) {
       
        if ( bcrypt.compareSync(password, user.password)) {
           
            res.status(200).json({
                status: "login success"
            })
        }
        else {
           
            res.status(200).json({
                status: "invalid password"
            })
        }
    }
    else {
       
        res.status(200).json({
            status: "invalid user"
        })
    }
})

export default userRouter