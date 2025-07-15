const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Replace with your MongoDB connection string.
// For now, we'll use a local MongoDB instance.
// In Docker, this will change to a service name.
//const MONGODB_URI = 'mongodb://localhost:27017/quotes_db';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/quotes_db';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for our quotes
const quoteSchema = new mongoose.Schema({
  text: String,
  author: String
});

const Quote = mongoose.model('Quote', quoteSchema);

// API endpoint to get all quotes
app.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API endpoint to add a new quote
app.post('/api/quotes', async (req, res) => {
  try {
    const { text, author } = req.body;
    const newQuote = new Quote({ text, author });
    await newQuote.save();
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
