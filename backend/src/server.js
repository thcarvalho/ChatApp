const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
const requireDir = require('require-dir')

const server = require('http').Server(app)

const {setupWebSocket} = require('./services/websocket')
setupWebSocket(server);


requireDir('./models');

app.use(cors())
app.use(express.json())

const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

app.use('/', routes.messagesRoutes);
app.use('/', routes.userRoutes);
app.use('/', routes.contactRoutes);
app.use('/', routes.authRoutes);
app.use('/', routes.chatRoutes);

server.listen(3000);
