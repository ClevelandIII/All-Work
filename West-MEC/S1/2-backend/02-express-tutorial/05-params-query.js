const express = require("express");
const app = express();
const { products } = require("./data");

app
  .get("/", (req, res) => {
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>');
  })

  .get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
      const { name, id, image, price, desc } = product;
      return { name, id, image, price, desc };
    });
    res.json({ results: newProducts, success: true });
  })

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //Search using params

  //.get("/api/products/:id/user/:user/title/:title", (req, res) => {
  //  console.log(req.params);
  //  res.send();
  //})

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  .get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const singleProduct = products.find((product) => product.id === Number(id));
    if (!singleProduct) {
      return res
        .status(404)
        .json({ results: [], success: false, message: "no matching id found" });
    }
    res.json({ results: [singleProduct], success: true });
  })

  .get("/api/pricing/:price", (req, res) => {
    const { price } = req.params;
    const newProducts = products.filter((product) => {
      return product.price < Number(price);
    });
    if (!newProducts) {
      return res.status(404).json({
        results: [],
        success: false,
        message: "nothing cheaper found",
      });
    }
    res.json({ results: newProducts, success: true });
  })

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  .get("/api/v1/query", (req, res) => {
    //in the explanation table search would be a string and limit would be a value, and i would explain what you would use them for
    const { search, limit } = req.query;
    // console.log(req.query);
    //create a  immutable copy of the data, also mutable is short for mutate, so a data copy that cant be changed
    // let newProducts = products <=== is mutable (YUCK)
    // let newProducts - products.map((products) => product) <=== is mutable (ALSO YUCK)

    let sortedProducts = [...products]; //immutable (NICE)
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.includes(search);
      });
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
      return res.json({
        results: [],
        success: false,
        message: "No products match the search parameters",
      });
    }

    res.json({ results: sortedProducts, success: true });
  })

  .all("*", (req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>");
  })
  //if there was no error catch then express would handle it itself

  .listen(3000, () => {
    dish = 5;
    console.log(`server is listening at port 3000`);
  });
