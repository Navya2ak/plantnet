const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  sellerName: {
    type: String,
  },
  storeLocation: {
    type: String,
  },
  storePincode: {
    type: String,
  },
  address: {
    type: String,
  },
  storePhoto: {
    type: String,
  },
  openingTime: {
    type: String,
  },
  closingTime: {
    type: String,
  },
  workingDays: {
    type: String,
  },
});

module.exports = model('seller', schema);
