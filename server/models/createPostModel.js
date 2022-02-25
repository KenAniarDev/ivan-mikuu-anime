const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
   uploaderUsername: {
      type: String,
      required: true,
   },
   uploaderID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
   },
   uploadContent: {
      type: String,
      required: true,
   },
   uploaderPhoto: {
      type: String,
   },
   uploadTime: { type: Date, default: Date.now },
});

const Post = mongoose.model("post", postSchema);
module.exports = Post;
