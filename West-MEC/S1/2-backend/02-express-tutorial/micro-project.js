const express = require("express");
const app = express();
const { menu } = require("./micro-data");

app
  .get("/", (req, res) => {
    const categories = [...new Set(menu.map((item) => item.category))];
    const title = [menu.map((i) => i.title)]
    res.send(`
    <div>
    <h1>Welcome to the website</h1>
    <br>
    <p>Here we have ${categories} to choose from. </>
    <p>There are also ${title} dishes to choose from. </p>
    </div>
  `);
  })

  .get("/api/v1", (req, res) => {
    const mainMenu = menu.map((single) => {
      const { id, title, category, price, img, desc } = single;
      return { id, title, category, price, img, desc };
    });
    res.json({ meal: mainMenu, success: true });
  })

  .get("/api/v1/id/:id", (req, res) => {
    const { id } = req.params;
    const dish = menu.find((single) => single.id === Number(id));
    if (!dish) {
      return res.status(404).json({
        results: [],
        success: false,
        message: `There is no ${id} id found`,
      });
    }
    res.json({ results: [dish], success: true });
  })

  .get("/api/v1/query", (req, res) => {
    const { search, price } = req.query;
    let categories = [...menu];

    if (search) {
      categories = categories.filter((dish) => {
        return dish.category.includes(search);
      });
    }

    if (price) {
      if (price == "high") {
        categories = categories.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (price == "low") {
        categories = categories.sort((a, b) => {
          return b.price - a.price;
        });
      } else {
        console.log("~_~");
      }
    }

    res.json({ results: categories, success: true });
  })

  .all("*", (req, res) => {
    res.status(404).send("Wrong Page");
  })
  .listen(3000, () => {
    console.log(`server is listening at port 3000`);
  });
