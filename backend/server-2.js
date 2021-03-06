// server-2.js
const express = require('express'); // import the library

const app = express(); // create the server
const VERSION = '1.0';

// Handle requests for GET /version
app.get('/version', (req, res) => {
  console.log('Sending version to client');
  res.send({ version: VERSION });
});

// start the server
app.listen(8080, () => {
  console.log(`The server is running`);
});
