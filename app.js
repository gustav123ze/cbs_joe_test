const express = require('express');
const app = express();
const port = 3000; // Du kan ændre porten efter behov

app.get('/', (req, res) => {
  res.send('Hej det virker test');
}); 

app.listen(port, () => {
  console.log(`Server kører på http://localhost:${port}`);
});


