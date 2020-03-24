const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
  users: [{
    userId: String,
    username: String,
    _id: false
  }],
  messages: [{
    message: {
      type: String,
      required: true
    },
    by: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  }
})

mongoose.model('Chat', ChatSchema);

module.exports = ChatSchema;