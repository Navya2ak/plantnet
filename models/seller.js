const { mongoose, model, Schema } = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  age: {
    type: String,
  },
  farmerSince: {
    type: String,
  },
  personalAddress: {
    type: String,
  },
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
