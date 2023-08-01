const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Update this to your client's URL
}));

app.use(morgan('combined'));
app.use(express.json());

// Serve the static files from the client folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// Set up routes or middleware if needed
// ...

module.exports = app;
