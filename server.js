const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);

app.use(express.static('./'));
app.use(express.json());

server.listen(9000, function() {
    console.log("Server running at: http://localhost:" + 9000)
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname+'/about.html'));
})