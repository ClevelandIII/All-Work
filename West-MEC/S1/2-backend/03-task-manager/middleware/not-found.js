const notFound = (req, res) => res.status(400).send("route does not exsist");

module.exports = notFound;
