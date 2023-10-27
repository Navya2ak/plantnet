const plantCategoriesModel = require('../models/plantCategory');
module.exports = {
  listPlantsCategories: async () => {
    let plantCategories = await plantCategoriesModel.findAll({});
  },
};
