const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  async login(req, res){
    const {username} = req.query;
    if (!await User.findOne({username})) {
      return res.status(400).send({error: "Usuário não encontrado"});
    }
    const user = await User.findOne({username});
    return res.json(user);
  }
}