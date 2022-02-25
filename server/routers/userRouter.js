const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
router.post("/", async (req, res) => {
   try {
      const { displayName, username, password, profilePicture } = req.body;

      //Validate Inputs
      if (!displayName || !username || !password)
         return res.json("Please enter all required fields");

      const existingUser = await User.findOne({ username });
      if (existingUser) return res.json("Username already exist");

      //Hash the password
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      //Save the user account to database
      const newUser = new User({
         displayName,
         username,
         passwordHash,
         profilePicture,
      });

      await newUser.save();
      res.send();

      // sign the token
      // const token = jwt.sign(
      //    {
      //       user: savedUser._id,
      //    },
      //    process.env.JWT_SECRET
      // );

      // send the token in the cookie
      // res.cookie("token", token, {
      //    httpOnly: true,
      // }).send();
   } catch (error) {
      res.status(500).send();
   }
});

//login

router.post("/login", async (req, res) => {
   try {
      const { username, password } = req.body;

      //validate
      if (!username || !password)
         return res.json("Please enter all required fields");

      const existingUser = await User.findOne({ username });

      //Validate username
      if (!existingUser) return res.json("Wrong username or password");

      //Validate password
      const passwordCorrect = await bcrypt.compare(
         password,
         existingUser.passwordHash
      );

      if (!passwordCorrect) return res.json("Wrong username or password");

      // sign the token
      const token = jwt.sign(
         {
            user: existingUser._id,
         },
         process.env.JWT_SECRET
      );

      // send the token in the cookie
      res.cookie("token", token, {
         httpOnly: true,
      }).send();
   } catch (error) {
      res.status(500).send();
   }
});

router.get("/logout", async (req, res) => {
   res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
   }).send();
});

router.get("/loggeIn", async (req, res) => {
   try {
      const token = req.cookies.token;

      if (!token) return res.json(false);

      const isLoginToken = jwt.verify(token, process.env.JWT_SECRET);

      const userId = isLoginToken.user;

      const query = { _id: userId };
      const userData = await User.findOne(query);

      res.send([isLoginToken && true, userData]);
   } catch (error) {
      res.json(false);
   }
});

router.put("/update", async (req, res) => {
   try {
      const { userID, displayName, username, password } = req.body;

      //Hash the password
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      //Save the user account to database
      const query = { _id: userID };
      User.findById(
         query,
         (err, updatedValue) => {
            updatedValue.displayName = displayName;
            updatedValue.username = username;
            updatedValue.passwordHash = passwordHash;
            updatedValue.save();
            res.send();
         },
         { new: true }
      );
   } catch (error) {
      res.status(500).send();
   }
});

module.exports = router;
