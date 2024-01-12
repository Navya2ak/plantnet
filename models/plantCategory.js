const { mongoose, model } = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = model('plantCategory', schema);
