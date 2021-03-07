// server-5.js
const express = require('express'); // import the library

const app = express(); // create the server

app.use(express.json()) // server configuration

const VERSION = '1.0';
let database = [
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

// Handle requests for POST /task
app.post('/task', (req, res) => {
  console.log('Receiving new task from client');
  console.log(req.body);
  database.push(req.body);
  res.send({ message: "Successfully added new task!"});
});

// Handle requests for DELETE /task
app.delete('/task/:id', (req, res) => {
  console.log(`Deleting task on client with task id: ${req.params.id}`);
  database = database.filter(task => task.id != req.params.id);
  
  res.send(database);
});

// Handle requests for UPDATE /task
app.put('/task/:id', (req, res) => {
  console.log(`Updating task on client with task id: ${req.params.id}`);
  const result = database.findIndex(task => task.index == req.params.id);
  if(result !== -1) {
    database[result] = req.body;
    res.send(database[result]);
  } else {
    res.status(404).send({ message: 'Invalid task id' });
  }
});

// start the server
app.listen(8080, () => {
  console.log(`The server is running`);
});
