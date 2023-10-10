const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: String,
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
