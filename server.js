const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Define API endpoint to get users
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
  // Sæt statuskoden til 200 (OK) og send brugerdata som JSON
  res.status(200).json(users);
});

app.get('/', (req, res) => {
  // Sæt statuskoden til 200 (OK) og send en simpel besked som svar
  res.status(200).send('Hello World!');
});

const hostname = '0.0.0.0';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

