// Import libraries
const mongoose = require('mongoose');

// Define todoSchema
const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Export
module.exports = mongoose.model('Todo', todoSchema);
