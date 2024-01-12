const plantCategoriesModel = require('../models/plantCategory');
const PickedPlantsModel = require('../models/pickedPlants');
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
  pickPlantsCategories: async (data) => {
    try {
      let { userId, pickedPlantsCategories } = data;
      let isCategoriesPicked = await PickedPlantsModel.findOne({ userId });
      if (isCategoriesPicked) {
        await PickedPlantsModel.updateOne(
          { userId },
          { pickedPlantsCategories },
        );
        return `Plants Categories Added `;
      }
      await PickedPlantsModel.create(data);
      return `Plants Categories Added `;
    } catch (error) {
      throw error;
    }
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
