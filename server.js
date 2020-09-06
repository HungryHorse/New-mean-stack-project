var http = require('http');
var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static('./'));

server.listen(9000, function() {
    console.log("Server running at: http://localhost:" + 9000)
});