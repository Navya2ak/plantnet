const io = require('socket.io')(process.env.SERVICE_PORT);
io.on('connection', (socket) => {
  socket.on('new-user', (name) => {
    users[socket.id] = name;
    socket.broadcast.emit('user-connected', name);
  });
  socket.emit('chat-message', 'heloo world');
  socket.on('send-chat-message', (message) => {
    socket.broadcast.emit('chat-message', { message, name });
  });
  socket.on('disconnected', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id]);
  });
});
