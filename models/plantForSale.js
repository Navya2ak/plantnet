const {mongoose,model} = require('mongoose');
const schema = new mongoose.Schema({
  userId: {
    type: String,
  },
  plantName: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  audio: {
    type: String,
  },
  video: {
    type: String,
  },
  price:{
    type:Number
  },
  location:{
    type:String
  },
  discount:{
    type:String
  },
  categoryName: {
    type: String,
  },
  nurturingKit: {
    type: Boolean,
  },
});

module.exports = model('plantForSale', schema);
