const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  userType: {
    type: String,
  },
  password: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  profilePic: {
    type: String,
  },
});

module.exports = model('user', schema);
