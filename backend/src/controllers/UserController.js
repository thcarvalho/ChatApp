const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  async add(req, res){
    const {username} = req.body;
    if (await User.findOne({username})) {
      return res.status(400).json({error: "Usuário já existe"});
    }
    const user = await User.create({username});
    return res.json(user)
  },
  async read (req, res){
    const {id} = req.params;
    const user = await User.findById(id);
    return res.json(user);
  },
  async list(req, res){
    const users = await User.find();
    return res.json(users);
  }
}