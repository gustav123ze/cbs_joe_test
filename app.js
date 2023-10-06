const express = require('express');
const app = express();
const port = 3000; // Du kan ændre porten efter behov


app.get('/', (req, res) => {
  res.send('Dette er den rigtige');
}); 

app.listen(port, '0.0.0.0', () => {
  console.log(`Server kører på http://0.0.0.0:${port}`);
});




