const socketio = require('socket.io');
let io;

const connectedUsers = [];

exports.setupWebSocket = (server) => {
  io = socketio(server)
  io.on('connection', socket => {
    const { user } = socket.handshake.query
    connectedUsers[user] = socket.id
    console.log(connectedUsers);
  });
}

exports.sendMessage = (to, message) => {
  const user = connectedUsers[to];
  if (user) {
    console.log(user);
    io.to(user).emit('sendMessage', message);
  }
}