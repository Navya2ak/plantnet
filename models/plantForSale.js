const { mongoose, model, Schema } = require('mongoose');
const schema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'plantCategory',
  },
  plantName: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  audio: {
    type: String,
  },
  video: {
    type: String,
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  discount: {
    type: String,
  },
  isKitAvailable: {
    type: Boolean,
  },
  likes: {
    default: 0,
    type: Number,
  },
});

module.exports = model('plantForSale', schema);
