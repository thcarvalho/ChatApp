const routes = require('express').Router()

const MessageController = require('../controllers/MessageController')

routes.get('/message', MessageController.read);
routes.post('/message', MessageController.create);
routes.delete('/message/:id', MessageController.delete);

module.exports = routes;