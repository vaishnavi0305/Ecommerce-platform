const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Healthcheck
app.get('/health', (req, res) => {
  res.send('Frontend is healthy');
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});
