const express = require("express");
const app=express();
const {connection} = require('./db');
require("dotenv").config();
app.use(express.json());
const {postRouter} = require("./routes/post.route")
const {userRouter} = require("./routes/user.route")

app.use("/users",userRouter)
app.use(auth)
app.use("/posts",postRouter)
app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("connected to DB")
    }catch(err){
        console.log(err)
    }
    console.log("server is running at4500")
})