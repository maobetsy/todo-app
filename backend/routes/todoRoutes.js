// Import libraries
const express = require('express');

// Import modules
const Todo = require('../models/Todo');

// Handle routes
const router = express.Router();

// GET all todos
router.get('/', async (req, res) => {
 try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE todo
router.post('/', async (req, res) => {
    try {
       // Validate the data
       if (!req.body.text) {
          return res.status(400).json({ message: 'Text is required.'})
       }
       const todo = await Todo.create({ text: req.body.text });
       res.status(201).json(todo);
    } catch (error) {
       res.status(500).json({ message: error.message });       
    }
});

// Export the router
module.exports = router;
