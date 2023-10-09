const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: string,
  },
  phone: {
    type: string,
  },
  userType: {
    type: string,
  },
  password: {
    type: string,
  },
});

module.exports = model('user', schema);
