const mongoose = require('mongoose');
const Message = mongoose.model('Message');

module.exports = {
  async create(req, res){
    try {
      const message = await Message.create(req.body);

      const by = req.connectedUsers.find(user => user.user === req.body.by);
      const to = req.connectedUsers.find(user => user.user === req.body.to);

      console.log(by);
      console.log(to);
      
      req.io.to(to).emit('sendMessage', req.body.by);
      return res.json(message);
    } catch (error) {
      return res.status(400).send({error})
    }
  },
  async read(req, res){
    const messages = await Message.find(req.query);
    return res.json(messages);
  },
  async delete(req, res){
    const {id} = req.params
    await Message.findByIdAndRemove(id)
    .then(() => {
      return res.json({ok: true});
    })
    .catch(error => {
      return res.status(400).send({error})
    })
  }
}