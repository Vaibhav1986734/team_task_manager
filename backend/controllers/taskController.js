const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate('assignedTo')
      .populate('project');

    res.json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};