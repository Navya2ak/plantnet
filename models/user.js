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
  },
  profilePic: {
    type: String,
  },
});

module.exports = model('user', schema);
