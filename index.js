var express = require('express'),
    path = require('path'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('A user connected!');

  socket.on('disconnect', function() {
    console.log('A user disconnected!');
  });

  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

server.listen(3000, function() {
  console.log('Listening on port 3000!');
});
