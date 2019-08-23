'use strict';

const express = require('express');

// Constants
const HOST = '0.0.0.0';
const PORT = 3000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World\n');
});

app.listen(PORT, HOST);
console.log(`Applicable available at http://${HOST}:${PORT}`);