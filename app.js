const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app); // Opret en HTTP-server
const io = socketIo(server); // Konfigurér Socket.IO

const host = "0.0.0.0"; // Lyt på alle tilgængelige IP-adresser

app.use(express.static(path.join(__dirname, "./client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/home.html"));
});

app.get("/global.css", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/global.css"));
});

app.get("/home.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/home.js"));
});

server.listen(port, host, () => {
  console.log(`Express server running at http://${host}:${port}/`);
});

io.on("connection", (socket) => {
  console.log("Someone connected");
  socket.on("chat message", (msg) => {
    console.log("Message: " + msg);
    io.emit("chat message", msg);
  });
});


