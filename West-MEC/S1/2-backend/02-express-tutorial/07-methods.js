const express = require("express");
const app = express();
let { people } = require("./data");

app
  .use(express.static("./app"))

  .use(express.urlencoded({ extended: false }))

  .use(express.json())

  .post("/login", (req, res) => {
    console.log(req.body);
    const { user } = req.body;
    res.send(`Welcome ${user}`);
  })

  .get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
  })

  .post("/api/people", (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: "please enter a name" });
    }
    people.push({ id: new Date().getTime(), name });
    res.json({ success: true, person: name });
    //the post makes the name addition persistant, but a restart will kill it
  })

  .put("/api/people/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((each) => each.id === 1 * id);

    if (!person) {
      return res
        .status(400)
        .json({ success: false, msg: `no person with id ${id}` });
    }

    const newPeople = people.map((person) => {
      if (person.id === 1 * id) {
        person.name = name;
      }
      return person;
    });

    people = newPeople;
    res.status(202).json({ success: true, data: people });
  })

  .delete("/api/people/:id", (req, res) => {
    const { id } = req.params;

    const person = people.find((each) => each.id === 1 * id);

    if (!person) {
      return res
        .status(400)
        .json({ success: false, msg: `no person with id ${id}` });
    }

    newPeople = people.filter((person) => {
      return person.id !== 1 * id;
    });
    people = newPeople;
    res.status(202).json({ success: true, data: people });
  })

  //Create <=== Post
  //Read   <=== Get
  //Update <=== Put / Patch
  //Delete <=== Delete

  .listen(3000, () => console.log("server listening at 3000..."));
