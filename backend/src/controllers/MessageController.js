const mongoose = require('mongoose');
const Chat = mongoose.model('Chat');

const { sendMessage } = require('../services/websocket')

module.exports = {
  async create(req, res) {
    try {
      const chat = await Chat.findByIdAndUpdate(req.params.id, { $push: { messages: req.body } })
     
      sendMessage(chat.users[0].userId, req.body);
      sendMessage(chat.users[1].userId, req.body);

      return res.json(chat.messages);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error });
    }
  },
  async read(req, res) {
    try {
      const chat = await Chat.findById(req.params.id)
      return res.json(chat.messages);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    const { id } = req.params
    await Message.findByIdAndRemove(id)
      .then(() => {
        return res.json({ ok: true });
      })
      .catch(error => {
        return res.status(400).send({ error })
      })
  }
}
