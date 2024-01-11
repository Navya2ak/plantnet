const { mongoose, model, Schema } = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: String,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'plantForSale',
  },
  isCarted: {
    default: false,
    type: Boolean,
  },
});

module.exports = model('wishlist', schema);
