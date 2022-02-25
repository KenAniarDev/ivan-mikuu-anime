const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

dotenv.config();

//Setup Server
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server is up in ${PORT}`);
});

app.use(express.json());
app.use(cookieParser());
app.use(
   cors({
      origin: ["http://localhost:3000"],
      credentials: true,
   })
);
app.use("/images", express.static(path.join(__dirname, "/images")));

//Connect to MongoDb
mongoose.connect(process.env.MDB_CONNECT, (err) => {
   if (err) return console.error(err);
   console.log("Connected to MongoDB");
});

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "images");
   },
   filename: (req, file, cb) => {
      cb(null, req.body.name);
   },
});

const upload = multer({ storage: storage });
app.post("/uploadImage", upload.single("file"), (req, res) => {
   res.status(200);
});

//Setup Routes

app.use("/auth", require("./routers/userRouter"));
app.use("/favorite", require("./routers/favoritesRouter"));
app.use("/createPost", require("./routers/createPostRouter"));

// mongodb+srv://katakuri:katakuri_111@anime.m47h1.mongodb.net/anime?retryWrites=true&w=majority
