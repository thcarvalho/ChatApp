const routes = require('express').Router()

const UserController = require('../controllers/UserController')

routes.get('/users', UserController.list);
routes.get('/users/:id', UserController.read);
routes.post('/users', UserController.add);

module.exports = routes;