const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  by: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('Message', MessageSchema);

module.exports = MessageSchema;