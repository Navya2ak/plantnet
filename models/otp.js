const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const schema = new Schema({
  phoneNumber: {
    type: String,
  },
  otp: {
    type: Number,
  },
});
module.exports = model('otp', schema);
