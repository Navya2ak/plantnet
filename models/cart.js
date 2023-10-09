const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: String,
  },
  stoke: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  count: {
    type: Number,
  },
});

module.exports = model('cart', schema);
