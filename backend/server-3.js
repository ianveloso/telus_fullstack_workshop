// server-3.js
const express = require('express'); // import the library

const app = express(); // create the server
const VERSION = '1.0';
const database = [
  { id: 1, text: 'Buy Milk', isCompleted: false },
  { id: 2, text: 'Visit the vet', isCompleted: false },
];

// Handle requests for GET /version
app.get('/version', (req, res) => {
  console.log('Sending version to client');
  res.send({ version: VERSION });
});

// Handle requests for GET /tasks
app.get('/tasks', (req, res) => {
  console.log('Sending tasks to client');
  res.send(database);
});

// start the server
app.listen(8080, () => {
  console.log(`The server is running`);
});
