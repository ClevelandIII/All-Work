const UserModel = require("../models/UserModel");

const searchUsers = async (req, res) => {
  let { searchText } = req.params;
//   searchText = searchText.trim();
  if (!searchText)
    return res.status(401).send("No Search Text Given, somehow got here");

  try {
    const results = await UserModel.find({
      name: { $regex: searchText, $options: "i" },
    });
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error at search controller");
  }
};

module.exports = { searchUsers };
