const UserModel = require("../../../models/UserModel");
const FollowerModel = require("../../../models/FollowerModel");
const ProfileModel = require("../../../models/ProfileModel");
const defaultProfilePic = require("../../../utils/defaultPic");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const isEmail = require("validator/lib/isEmail");
const regexUsername = require("../../../utils/valUsername");

const signupRoute = async (req, res) => {
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //Get route
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  if (req.method === "GET" && req.params) {
    console.log(req.params);
    const { username } = req.params;
    try {
      if (username.length < 1) return res.status(401).send("Invalid");
      if (!regexUsername.test(username)) return res.status(401).send("Invalid");
      const user = await UserModel.findOne({
        username: username.toLowerCase(),
      });

      if (user) return res.status(401).send("Username stolen");

      return res.status(200).send("Availible");
    } catch (err) {
      console.log(err);
    }
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //Post route
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  if (req.method === "POST") {
    const {
      name,
      email,
      username,
      password,
      bio,
      facebook,
      youtube,
      twitter,
      instagram,
    } = req.body.user;

    if (!isEmail(email)) return res.status(401).send("Invalid");
    if (password.length < 6) {
      return res.status(401).send("Password must be longer than 5 characters");
    }
    try {
      let user;
      user = await UserModel.findOne({ email: email.tolowercase() });
      if (user) return res.status(401).send("Email already used");

      user = new UserModel({
        name,
        email: email.tolowercase(),
        username: username.tolowercase(),
        password,
        profilePicURL: req.body.profilePicURL || defaultProfilePic,
      });

      user.password = await bcrypt.hash(password, 10);
      user = await user.save();

      let profileFields = {};
      profileFields.user = user._id;
      if (bio) profileFields.bio = bio;

      profileFields.social = {};
      if (facebook) profileFields.social.facebook = facebook;
      if (twitter) profileFields.social.twitter = twitter;
      if (instagram) profileFields.social.instagram = instagram;
      if (youtube) profileFields.social.youtube = youtube;

      await new ProfileModel(profileFields).save();
      await new FollowerModel({
        user: user._id,
        followers: [],
        following: [],
      }).save();

      const payload = { userID: user._id };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "2d" },
        (err, token) => {
          if (err) throw err;
          res.status(200).json(token);
        }
      );
    } catch (err) {
      console.log(err);
      return res.status(500).send("Server error");
    }
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //Error
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  else {
    res.status(500).send("Method Not Supported");
  }
};

module.exports = signupRoute;
