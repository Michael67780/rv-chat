var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var messages = [];

app.use('/resources', express.static('resources'));
app.use('/app', express.static('app'));
app.use('/ext', express.static('ext'));
app.use('/build', express.static('build'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/messages', function(req, res){
	res.json(messages);
});

//trap all others
app.get(/.*/, function(req, res){
	res.sendFile(__dirname + req.path);
});

io.on('connection', function(socket){
  socket.on('chat.message', function(msg){
	messages.push(msg);
    io.emit('chat.message', msg);
  });
});

http.listen(3000);