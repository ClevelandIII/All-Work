const express = require("express");
const router = express.Router();

let {
  deletePerson,
  updatePerson,
  createPerson, 
  readPeople,
} = require("../controllers/peopleController");

// router
//   .get("/", readPeople)
//   .post("/", createPerson)
//   .delete("/id", deletePerson)
//   .put("/:id", updatePerson);

router.route("/").get(readPeople).post(createPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
