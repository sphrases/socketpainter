var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
app.use(express.static('public'));


app.get('/', function(req, res){
  //res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html');

});

io.on('connection', function(socket) {
  console.log('user connected  ' + socket.id);
  socket.on('disconnect', function(){
    console.log('user '+socket.id+' disconnected');
  });



  socket.on('userJson', function(userJson){
    console.log(userJson);
    io.emit('serverSentJson',userJson);
  });


});

http.listen(6572, function(){
  console.log('listening on *:6572');
});