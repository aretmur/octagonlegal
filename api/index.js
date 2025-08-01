// Vercel serverless function
const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// API routes placeholder (add your actual routes here)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Fallback to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

module.exports = app;