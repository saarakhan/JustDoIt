const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.userId });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title, description, status } = req.body;
  const task = new Task({ user: req.userId, title, description, status });
  await task.save();
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    req.body,
    { new: true }
  );
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
  res.json({ message: 'Task deleted' });
};
