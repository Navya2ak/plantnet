const { Schema, model } = require('mongoose');

const schema = Schema({
  userId: {
    type: String,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'plantForSale',
  },
  discount: {
    default: 0,
    type: Number,
  },
  count: {
    default: 1,
    type: Number,
  },
});

module.exports = model('cart', schema);
