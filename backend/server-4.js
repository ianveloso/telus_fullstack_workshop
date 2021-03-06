// server-4.js
const express = require('express'); // import the library

const app = express(); // create the server
const VERSION = '1.0';
const database = [
  { id: 1, name: 'Buy Milk', description: 'Almond' },
  { id: 2, name: 'Visit the vet', description: 'Emma' },
];

// Handle requests for GET /version
app.get('/version', (req, res) => {
  res.send({ version: VERSION });
});

// Handle requests for GET /tasks
app.get('/tasks', (req, res) => {
  res.send(database);
});

// Handle requests for POST /task
app.post('/task', (req, res) => {
  
});

// start the server
app.listen(8080, () => {
  console.log(`The server is running`);
});
