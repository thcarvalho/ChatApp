const routes = require('express').Router()

const ContactsController = require('../controllers/ContactsController')

routes.get('/contact/:id', ContactsController.read);
routes.post('/users/:id/contact', ContactsController.create);
routes.delete('/users/:id/contact', ContactsController.delete);

module.exports = routes;