const asyncWrapper = require("../middleware/async");
const Task = require("../models/Task");

const getTask = asyncWrapper(async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res
        .status(404)
        .json({ err, msg: `no task with that id, ${req.params.id}` });
    }
    res.json({ method: req.method, task, params: req.params });
  } catch (err) {
    res.status(404).json({ err });
  }
});
const createTask = asyncWrapper(async (req, res) => {
  // res.json({ method: req.method, task: "createTasks", body: req.body });
  const task = await Task.create(req.body);
  res.status(201).json({ method: req.method, task, body: req.body });
});
const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json({
    method: req.method,
    task,
    params: req.params,
    body: req.body,
  });
});
const removeTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.json({ msg: `no item with id ${id}` });
    }
    res.json({ method: req.method, task, params: req.params });
  } catch (err) {
    res.json({ msg: err });
  }
});
const clearTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.deleteMany({});

  res.json({ method: req.method, tasks });
});
const getAllTasks = asyncWrapper(async (req, res) => {
  // const tasks = await Task.find({})

  const tasks = await Task.find({});

  res.json({ method: req.method, tasks });
});

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  removeTask,
  clearTasks,
};
