const plantCategoriesModel = require('../models/plantCategory');
const PlantForSale = require('../models/plantForSale');

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
  addPlantsforSale: async (data) => {
    try {
      let {
        userId,
        plantName,
        image,
        description,
        audio,
        video,
        price,
        location,
        discount,
        categoryName,
        nurturingKit,
      } = data;
      await PlantForSale.create({
        userId,
        plantName,
        image,
        description,
        audio,
        video,
        price,
        location,
        discount,
        categoryName,
        nurturingKit,
      });

      return 'Plant Added FOR SALE Section';
    } catch (error) {
      throw new BadRequestError(error);
    }
  },
};
