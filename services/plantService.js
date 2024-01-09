const plantCategoriesModel = require('../models/plantCategory');
const fs = require('fs');
module.exports = {
  bulkInserCateories: async () => {
    const data = JSON.parse(
      fs.readFileSync(
        '/home/metrictreelabs/Desktop/MYWorks/Plantnet/seeder/plantCategories.json',
        'utf8',
      ),
    );
    plantCategoriesModel.insertMany(data);
    return `${data.length} Categories inserted`;
  },
  listPlantsCategories: async () => {
    return await plantCategoriesModel.find();
  },
};
