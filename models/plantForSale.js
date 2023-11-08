const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  userId: {
    type: String,
  },
  plantName: {
    type: String,
  },
  image: {
    type: Number,
  },
  description: {
    type: String,
  },
  audio: {
    type: String,
  },
  video: {
    type: Number,
  },
  price:{
    type:Number
  },
  location:{
    type:String
  },
  discount:{
    type:String
  }
});

module.exports = model('plantForSale', schema);
