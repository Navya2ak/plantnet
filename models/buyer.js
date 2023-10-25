const { mongoose, model, Schema } = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
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
