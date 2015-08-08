var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var messages = [];

app.use('/resources', express.static('resources'));
app.use('/app', express.static('app'));
app.use('/ext', express.static('ext'));
app.use('/build', express.static('build'));

app.get('/bootstrap.js', function(req, res){
  res.sendFile(__dirname + '/bootstrap.js');
});

app.get('/bootstrap.json', function(req, res){
  res.sendFile(__dirname + '/bootstrap.json');
});

app.get('/bootstrap.css', function(req, res){
  res.sendFile(__dirname + '/bootstrap.css');
});

app.get('/app.json', function(req, res){
  res.sendFile(__dirname + '/app.json');
});

app.get('/app.js', function(req, res){
  res.sendFile(__dirname + '/app.js');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/message-list', function(req, res){
	res.json(messages);
});

io.on('connection', function(socket){
  socket.on('chat.message', function(msg){
	messages.push(msg);
    io.emit('chat.message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});