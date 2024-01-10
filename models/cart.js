const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: String,
  },
  productId: {
    type: schema.Types.ObjectId,
    ref: 'plant',
  },
  discount: {
    type: Number,
  },
  count: {
    type: Number,
  },
});

module.exports = model('cart', schema);
