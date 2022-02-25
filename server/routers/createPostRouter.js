const router = require("express").Router();
const CreatePost = require("../models/createPostModel");

router.post("/", async (req, res) => {
   try {
      const { uploaderUsername, uploaderID, uploadContent, uploaderPhoto } =
         req.body;

      const newPost = new CreatePost({
         uploaderUsername,
         uploaderID,
         uploadContent,
         uploaderPhoto,
      });

      const makePost = await newPost.save();
      res.json(makePost);
   } catch (error) {
      res.status(500).send();
   }
});

router.get("/getpost", async (req, res) => {
   try {
      const mysort = { uploadTime: -1 };
      const postsList = await CreatePost.find({}).sort(mysort);

      res.send(postsList);
   } catch (error) {
      console.error(error);
      res.status(500).send();
   }
});

router.delete("/delete/:id", async (req, res) => {
   const id = req.params.id;
   await CreatePost.findOneAndRemove({ _id: id }).exec();
   // await Favorite.findByIdAndRemove(id).exec();
   res.send();
});

module.exports = router;
