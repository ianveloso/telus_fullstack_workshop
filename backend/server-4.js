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
  console.log('Sending version to client');
  res.send({ version: VERSION });
});

// Handle requests for GET /tasks
app.get('/tasks', (req, res) => {
  console.log('Sending tasks to client');
  res.send(database);
});

// Handle requests for POST /task
app.post('/task', (req, res) => {
  console.log('Receiving new task from client');
  console.log(req.body);
  database.push(req.body);
});

// start the server
app.listen(8080, () => {
  console.log(`The server is running`);
});
