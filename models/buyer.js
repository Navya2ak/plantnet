const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  deliveryLocation: {
    type: string,
    required: false,
  },
  residentialAddress: {
    type: string,
  },
  residentialPincode: {
    type: string,
  },
  purchasePoint: {
    type: number,
  },
});

module.exports = model('buyer', schema);
