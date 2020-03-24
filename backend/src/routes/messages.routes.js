const routes = require('express').Router()

const MessageController = require('../controllers/MessageController')

routes.get('/chat/message/:id', MessageController.read);
routes.put('/chat/message/:id', MessageController.create);
routes.delete('chat/message/:id', MessageController.delete);

module.exports = routes;