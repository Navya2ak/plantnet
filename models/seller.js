const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  storeLocation: {
    type: string,
  },
  storePincode: {
    type: string,
  },
  address: {
    type: string,
  },
  storePhoto: {
    type: string,
  },
  paymentMethod: {
    type: string,
  },
  deliveryAvailability: {
    type: boolean,
  },
  workingTime: {
    type: string,
  },
  workingDays: {
    type: string,
  },
});

module.exports = model('seller', schema);
