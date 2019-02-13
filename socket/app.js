// const app = require('express')();
// const http = require('http').Server(app);

// app.get('/', function(req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

// http.listen(3000, function() {
//   console.log('Server has been started');
// });

//2.
// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// app.get('/', function(req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

// io.on('connect', function(socket) {
//   console.log('A user connected');

//   socket.on('disconnect', function() {
//     console.log('A user disconnected');
//   });
// });

// http.listen(3000, function() {
//   console.log('Server has been started');
// });

// //3. обработка события
// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// app.get('/', function(req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

// io.on('connect', function(socket) {
//   console.log('A user connected');

//   setTimeout(function() {
//     socket.send('Sent a message 2 seconds after connection');
//   }, 2000);

//   socket.on('disconnect', function() {
//     console.log('A user disconnected');
//   });
// });

// http.listen(3000, function() {
//   console.log('Server has been started');
// });

// //4. добавление пользовательских событий
// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// app.get('/', function(req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

// io.on('connect', function(socket) {
//   console.log('A user connected');

//   setTimeout(function() {
//     socket.emit('myEvent', { description: 'User event from server' });
//   }, 2000);

//   socket.on('disconnect', function() {
//     console.log('A user disconnected');
//   });
// });

// http.listen(3000, function() {
//   console.log('Server has been started');
// });

//5. получение событий от клиента
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connect', function(socket) {
  socket.on('clientEvent', function(data) {
    console.log(data);
  });
});

http.listen(3000, function() {
  console.log('Server has been started');
});
