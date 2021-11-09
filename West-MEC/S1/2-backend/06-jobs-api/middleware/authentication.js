const jwt = require('jsonwebtoken')
require('dotenv').config

const authenticationCheck = async (req, res, next) => {
  const auth = req.headers;

  if (!auth || auth.startWith("Bearer ") == false) {
    throw new Error ("This authentication is incorrect");
  }

  const token = auth.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new UnauthError("Not authorized");
  }
};
