/*
    post : '/' createTask => adds a new task to the list
    put : '/:id' updateTask => update a single task
    delete : '/:id' removeTask => deletes a single task
    get : '/:id' getTask => read a single task
    delete : '/' clearTasks => deletes all tasks
    get : '/' getAllTasks => read all tasks
*/

const express = require("express");
const router = express.Router();

const{
    getAllTasks,
    getTask,
    removeTask,
    updateTask,
    createTask,
    clearTasks,
} = require('../controllers/tasksCon')

router.route("/").post(createTask).delete(clearTasks).get(getAllTasks);
router.route("/:id").put(updateTask).delete(removeTask).get(getTask);

module.exports = router;
