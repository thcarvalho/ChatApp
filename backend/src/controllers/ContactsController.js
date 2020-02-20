const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  async create(req, res) {
    try {
      const user = await User.findById(req.params.id);
      const contact = req.body;

      if (user.contacts.some(e => e.userId === contact.userId)) {
        return res.status(400).send({ error: "Contato já existente" })
      }

      if (!await User.findOne({ username: contact.username })) {
        return res.status(400).send({ error: "Usuário não existe" })
      }

      await user.updateOne({ contacts: [...user.contacts, contact] })
      return res.json(user);

    } catch (error) {
      console.log(error);
      return res.status(400).send({ error })
    }
  },
  async read(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.json(user.contacts);
  },
  async delete(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, { $pull: { contacts: { userId: req.body.userId } } }, { safe: true, multi: true });
    return res.json(user.contacts);
  }
}