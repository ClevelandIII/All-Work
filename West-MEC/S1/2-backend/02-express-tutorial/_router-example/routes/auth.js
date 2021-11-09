const express = require("express");
const router = express.Router();


router.post("/", (req, res) => {
  console.log(req.body);
  const { user } = req.body;
  res.send(`Welcome ${user}`);
});

module.exports = router