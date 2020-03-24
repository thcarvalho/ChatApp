const userRoutes = require('./user.routes');
const messagesRoutes = require('./messages.routes');
const contactRoutes = require('./contacts.routes')
const authRoutes = require('./auth.routes')
const chatRoutes = require('./chat.routes')

const routes = {
  userRoutes,
  messagesRoutes,
  contactRoutes,
  authRoutes,
  chatRoutes
}

module.exports = routes;