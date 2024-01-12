const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  messageStatus: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  deliveredTime: {
    type: Date,
  },
  type: {
    type: Number,
  },
});

module.exports = model('cart', schema);
