// server-1.js
const express = require('express'); // import the library

const app = express(); // create the server

// start the server
app.listen(8080, () => {
  console.log(`The server is running`);
});
