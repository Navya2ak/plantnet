const { mongoose, model } = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: String,
  },
  pickedPlantsCategories: {
    type: Array,
  },
});

module.exports = model('pickedPlants', schema);
