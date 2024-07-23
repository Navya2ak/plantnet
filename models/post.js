const { mongoose, model } = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: String,
  },
  description: {
    type: String,
  },
  comments: {
    type: Array,
  },
  saved: {
    type: Number,
  },
  like: {
    type: Number,
  },
  attachedFiles: {
    type: String,
  },
});

module.exports = model('post', schema);
