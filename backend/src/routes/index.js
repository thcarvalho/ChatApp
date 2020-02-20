const userRoutes = require('./user.routes');
const messagesRoutes = require('./messages.routes');
const contactRoutes = require('./contacts.routes')

const routes = {
  userRoutes,
  messagesRoutes,
  contactRoutes
}

module.exports = routes;