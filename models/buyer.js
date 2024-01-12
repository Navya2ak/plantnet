const { mongoose, model, Schema } = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  buyerName: {
    type: String,
  },
  photo: {
    type: String,
  },
  deliveryLocationDetails: {
    type: Object,
  },
  residentialAddress: {
    type: String,
  },
  residentialPincode: {
    type: String,
  },
  purchasePoint: {
    default: 10,
    type: Number,
  },
});

module.exports = model('buyer', schema);
