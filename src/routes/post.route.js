const express = require("express");
const { PostModel } = require("../model/post.model");
const postRouter = express.Router();



postRouter.get("/",async(req,res)=>{
    const {device} = req.query;
    try{
        const posts = await PostModel.find({authorID:req.body.authorID,device:device});
        res.status(200).send(posts);

    }catch(err){
        res.status(400).send({"err":err.message})
    }
})

postRouter.patch("/update/:postID",async(req,res)=>{
     const {postID} = req.params;
     try{
        if(req.body.authorID!==post.authorID){
            res
              .status(200)
              .send({ msg: "You are not an auhtorised to do changes" });
        }else{
           await PostModel.findByIdAndUpdate({ _id: postID }, req.body);
           res.status(200).send({ msg: "Post Updated" });
        }
        
     }catch(err){
        res.status(400).send({"err":err.message})
     }
})
postRouter.delete("/delete/:postID", async (req, res) => {
  const { postID } = req.params;
  try {
     if (req.body.authorID !== post.authorID) {
       res.status(200).send({ msg: "You are not an auhtorised to do changes" });
     } else{
        await PostModel.findByIdAndDelete({ _id: postID });
         res.status(200).send({ "msg": "Post Deleted" });
     } 
  } catch (err) {
    res.status(400).send({"err": err.message });
  }
});


module.exports = {
    postRouter
}