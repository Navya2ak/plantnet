const { mongoose, model } = require('mongoose');

const schema = new mongoose.Schema({
  deliveryLocation: {
    type: String,
    required: false,
  },
  residentialAddress: {
    type: String,
  },
  residentialPincode: {
    type: String,
  },
  purchasePoint: {
    type: Number,
  },
});

module.exports = model('buyer', schema);
