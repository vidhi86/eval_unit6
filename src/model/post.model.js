const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
  {
    title: { type: String },
    body: { type: String },
    device: { type: String },
   
  },
  {
    versionKey: false,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = {
  PostModel
};
