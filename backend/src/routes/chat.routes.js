const routes = require('express').Router()

const ChatController = require('../controllers/ChatController');

routes.get('/chat', ChatController.list);
routes.get('/chat/contact', ChatController.read);
routes.post('/chat', ChatController.create);

module.exports = routes;