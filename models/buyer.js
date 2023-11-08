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
  deliveryLocation: {
    type: String,
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
