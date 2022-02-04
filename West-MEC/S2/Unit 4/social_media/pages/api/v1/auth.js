import isEmail from "validator/lib/isEmail";
import UserModel from "../../../models/UserModel";
const jwt = require("jsonwebtoken");

const authRoute = (req, res) => {
  //Post route

  if (req.method === "POST") {
    const { email, password } = req.body.user;
    if (!isEmail(email)) return res.status(401).send("Unauthorized");
    if (password.length < 6) {
      return res
        .status(401)
        .send("Password must be at least longer than five characters");
    }
    try {
      const user = await UserModel.findOne({
        email: email.toLowerCase(),
      }).select("+password");

      if (!user) return res.status(401).send("Invalid Credentials");

      const isPassword = await bcrypt.compare(password, user.password);
      if (!isPassword) return res.status(401).send("Invalid Credentials");

      const payload = { userId: user._id };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "2d" },
        (err, token) => {
          if (err) throw err;
          res.status(200).json(token);
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(500).send("Server Error");
    }
  } else {
    res.status(500).send("Method not supported on route");
  }
};
