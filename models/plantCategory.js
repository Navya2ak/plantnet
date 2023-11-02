const { mongoose, model } = require('mongoose');

const schema = new mongoose.Schema({
  plantnName: {
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
