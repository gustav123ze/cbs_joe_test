const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Gustav' },
    { id: 2, name: 'Hans' }
  ];
  
  res.status(200).json(users);
});

app.get('/', (req, res) => {
  res.status(200).send('Det virker');
});

const hostname = '0.0.0.0';
const port = 6000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

