const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
const requireDir = require('require-dir')

const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectedUsers = []

io.on('connection', socket => {
  connectedUsers.push({
    user: socket.handshake.query.user,
    id: socket.id
  });
  console.log(connectedUsers);
});

requireDir('./models');

app.use(cors())
app.use(express.json())

const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

app.use((req,res,next) => {
  req.io = io
  req.connectedUsers = connectedUsers
  return next()
})

app.use('/', routes.messagesRoutes);
app.use('/', routes.userRoutes);
app.use('/', routes.contactRoutes);

server.listen(3000);
