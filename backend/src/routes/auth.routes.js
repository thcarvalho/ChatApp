const routes = require('express').Router()

const AuthController = require('../controllers/AuthController');

routes.get('/auth', AuthController.login);

module.exports = routes;
