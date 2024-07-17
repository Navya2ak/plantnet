const plantCategoriesModel = require('../models/plantCategory');
const PlantForSale = require('../models/plantForSale');
const { BadRequestError } = require('../exceptions/requestException'); 

const fs = require('fs');
module.exports = {
  bulkInserCateories: async () => {
    const data = JSON.parse(
      fs.readFileSync(
        '/home/metric/Desktop/My Projects/plantnet/seeder/plantCategories.json',
        'utf8',

      ),
    );
    plantCategoriesModel.insertMany(data);
    return `${data.length} Categories inserted`;
  },
  listPlantsCategories: async () => {
    return await plantCategoriesModel.find();
  },
  addPlantsforSale: async (data) => {
    try {
      let {
        userId,
        category,
        price,
        plantName,
        discount,
        image,
        description,
        audio,
        video,
        location,
        categoryName,
        isKitAvailable,
        nItems
      } = data;
      await PlantForSale.create({
        userId,
        category,
        price,
        plantName,
        discount,
        image,
        description,
        audio,
        video,
        location,
        categoryName,
        isKitAvailable,
        nItems
      });

      return 'Plant Added FOR SALE Section';
    } catch (error) {
      console.log(error);
      throw new BadRequestError(error);
    }
  },
};
