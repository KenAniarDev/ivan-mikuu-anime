const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   displayName: {
      type: String,
      required: true,
   },
   username: {
      type: String,
      required: true,
   },
   passwordHash: {
      type: String,
      required: true,
   },
   profilePicture: {
      type: String,
   },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
