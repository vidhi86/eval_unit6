const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel } = require("../model/user.model");
const userRouter = express.Route();

userRouter.post("/register",(req,res)=>{
    const {email,name,gender,password} = req.body;
    try{
        bcrypt.hash(password, 5, async(err, hash)=> {
           const user = new UserModel({email,name,gender,password:hash})
           await user.save();
           res.status(200).send({"msg":"New user has been added"})
         });
    }catch(err){
        res.status(400).send({"err":err.message})
    }
})


userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try{
       const user = await UserModel.findOne({email})
       if(user){
        bcrypt.compare(password, user.password, (err, result)=> {
          if(result){
            const token = jwt.sign({authorId:user._id,author:user.name},"media")
            res.status(200).send({"msg":"Login Successfull"})
          }else{
            res.status(200).send({"msg":"Wrong Credentials"})
          } 
        });
       }else{
        res.status(200).send({"msg":"Wrong Credentials"})
       }
    }catch(err){
         res.status(400).send({ err: err.message });
    }
})


module.exports = {
    userRouter
}