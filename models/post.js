const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: string,
  },
  description: {
    type: Sting,
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
