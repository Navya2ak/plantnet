const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  categoryName: {
    type: String,
  },
  categoryCode: {
    type: String,
  },
  description: {
    type: Object,
    required: false,
  },
  photo: {
    type: String,
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
});

module.exports = model('plant', schema);
