const login = (req, res) => {
  console.log(req.body);
  const { user } = req.body;
  res.send(`Welcome ${user}`);
}

module.exports = {login}