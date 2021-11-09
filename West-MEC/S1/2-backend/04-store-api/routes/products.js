const express = require("express");
const router = express.Router();
const {getAllProducts, getAllProductsStatic} = require('../controllers/products')

//get all products (filtered list)

//get all products static (unfiltered list)

router.route("/").get(getAllProducts);

router.route("/static").get(getAllProductsStatic);

module.exports = router;
