const mongoose = require('mongoose');

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
});

module.exports = model('order', schema);
