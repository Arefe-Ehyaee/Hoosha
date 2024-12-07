const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { insertMessage, getMessages } = require('./query'); // Import from query.js

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Allow requests from other origins
app.use(bodyParser.json()); // Parse JSON bodies

// API to store a new message
app.post('/api/add-message', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  insertMessage(message, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save message' });
    }
    res.status(200).json(result); // Send the inserted message data
  });
});

// API to fetch all messages
app.get('/api/get-messages', (req, res) => {
  getMessages((err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve messages' });
    }
    res.status(200).json(rows); // Return the fetched messages
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
