const mongoose = require('mongoose');

const Chat = mongoose.model('Chat');

module.exports = {
  async list(req, res) {
    const { user } = req.query;    
    const chats = await Chat.find({ 'users.userId': user })
    return res.json(chats);
  },
  async create(req, res) {
    const { users } = req.body;
    try {
      const chats = await Chat.find().where('users').all(users)

      if (chats.length > 0) {
        return res.json(chats)
      }

      const chat = await Chat.create({ users });

      return res.json(chat);
    } catch (error) {
      console.log(error);
    }
  },
  async read(req, res) {
    const { users } = req.query;
    try {
      const chats = await Chat.find().where('users').all(users)
      return res.json(chats);
    } catch (error) {
      console.log(error);
    }
  },
}