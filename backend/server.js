// Import libraries
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

// Initialise a new Express application
const app = express();

// Middleware
app.use(express.json());

// Establish a connection to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Test route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Routes
const todoRoutes = require('./routes/todoRoutes');

app.use('/api/todos', todoRoutes);

// Start application and listen for incoming HTTP requests
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});