const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: Number,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
    required: false,
  },
  rating: {
    type: String,
  },
  discount: {
    type: Number,
  },
});

module.exports = model('bucket', schema);
