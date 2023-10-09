const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = 3000;

app.get('/testapi', (req, res) => {
    res.status(200).send('test det virker');
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
