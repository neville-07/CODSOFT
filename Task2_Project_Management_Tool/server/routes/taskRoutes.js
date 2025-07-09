const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // ✅ only declared once

// ✅ Get all tasks (needed for Tasks.js)
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create task
router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks for a project
router.get('/project/:projectId', async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update task status
router.patch('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get task summary for a project
router.get('/summary/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;
    const total = await Task.countDocuments({ projectId });
    const completed = await Task.countDocuments({ projectId, status: 'completed' });
    const pending = total - completed;

    res.json({ total, completed, pending });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
