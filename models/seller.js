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
  storeAddress: {
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
  currentRating: {
    type: Number,
  },
  oneStar: {
    type: Number,
  },
  twoStar: {
    type: Number,
  },
  threeStar: {
    type: Number,
  },
  fourStar: {
    type: Number,
  },
  fiveStar: {
    type: Number,
  },
});

module.exports = model('seller', schema);
