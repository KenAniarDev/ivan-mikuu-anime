const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
   username: String,
   password: String,
});

const Login = mongoose.model("login", LoginSchema);
module.exports = Login;
