const { mongoose, model } = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: String,
  },
  orderStatus: {
    type: String,
  },
  deliveryDate: {
    type: Date,
  },
  plant: {
    type: String,
  },
});

module.exports = model('order', schema);
