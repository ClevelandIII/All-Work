const Product = require("../models/product");

const Register = async (req, res) => {
  // res.json({
  //   method: req.method,
  //   products: "getAllProducts",
  //   query: req.query,
  // });

  let queryObject = {};
  const { Company, Email, Password, sort, fields } = req.query;

  if (Company) {
    queryObject.Company = Company;
  }

  if (Email) {
    queryObject.Email = Email;
  }

  if (Password) {
    queryObject.Password = { $regex: name, $options: "i" };
  }

  if (filters) {
    const operatorMap = {
      ">": "$gt",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
      ">=": "$te",
    };
    const re = /\b(<|>|<=|>=|=)\b/g;

    const newFilters = filters.replace(
      re,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ["price", "rating"];
    newFilters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      // field = price
      // operator = &gte
      // value = 100
      if (options.includes(field)) {
        queryObject[field] = { [operator]: +value };
      }
    });
  }

  let results = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    results = results.sort(sortList);
  } else {
    results = results.sort("-featured -rating price");
    //sorts by featured, then rating, then price
  }

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    results = results.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  results = results.limit(limit).skip(skip);

  const products = await results;
  res.json({ success: true, results: products, nbHits: products.length });
};

const getAllProductsStatic = (req, res) => {
  res.json({ method: req.method, products: "getAllProductsStatic" });
};

module.exports = { getAllProducts, getAllProductsStatic };
