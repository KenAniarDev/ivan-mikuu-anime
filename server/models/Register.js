const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
   profilePicture: String,
   displayname: String,
   username: String,
   password: String,
   isUserLogin: Boolean,
});

const Register = mongoose.model("userAccount", RegisterSchema);
module.exports = Register;
