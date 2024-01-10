const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  seller: {
    type: schema.Types.ObjectId,
    ref: 'seller',
  },
  name: {
    type: String,
  },
  category: {
    type: schema.Types.ObjectId,
    ref: 'plantCategory',
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  nurturingKit: {
    type: Boolean,
  },
  likes: {
    type: Number,
  },
});

module.exports = model('plant', schema);
