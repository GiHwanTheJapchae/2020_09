var http = require('http');
var fs = require('fs');
var path = require('path');
var socketio = require('socket.io');

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Express-loaded')
});
app.use(express.static(path.join(__dirname, 'www-express')));

app.listen(8080, function(){
    console.log('server');
});

/*

var server = http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });



}).listen(8080, function() {
    console.log('Running--');
});
*/
var io = socketio.listen(8080);

io.sockets.on('connection', function (socket) {
    socket.on('sMsg', function (data) {
        io.sockets.emit('rMsg', data);
    });
});