const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    gender:{type:String},
    password:{type:String},
    authorId:{type:String}
},{
    versionKey:false
})



const UserModel = mongoose.model("user",userSchema)

module.exports={
    UserModel
}
