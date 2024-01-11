const { mongoose, model } = require('mongoose');
const schema = new mongoose.Schema({
  sellerId: {
    type: String,
  },
  category: {
    type: String,
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
  categoryName: {
    type: String,
  },
  nurturingKit: {
    type: Boolean,
  },
  likes: {
    type: Number,
  },
});

module.exports = model('plantForSale', schema);
