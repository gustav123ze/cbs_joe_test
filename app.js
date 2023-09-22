const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // Ændret til HTML
  fs.readFile('./public/index.html', (error, data) => { // Læs indholdet af en HTML-fil (index.html)
    if (error) {
      res.end('<h1>Fejl ved indlæsning af HTML-fil</h1>'); // Håndter fejl i læsningen
    } else {
      res.end(data); // Send indholdet af HTML-filen som svar
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
