const plantCategoriesModel = require('../models/plantCategory');
const PlantForSale = require('../models/plantForSale');
const { BadRequestError } = require('../exceptions/requestException');
const fs = require('fs');
const { Order } = require('../models');
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
  deletePlantFromSale: async (data) => {
    let { id, userId } = data
    return await PlantForSale.deleteOne({ id, userId });
  },
  fetchPlantDetails: async (data) => {
    let { id } = data
    return await PlantForSale.find({ id });
  },
  fetchPlantStatistic: async (data) => {
    let { id } = data
    return await PlantForSale.find({ id });
  },
  updatePlantDetails: async (params) => {
    let { id, userId, data } = params
    return await PlantForSale.findOneAndUpdate({ id, userId }, { data });
  },
  updatePlantAsOutofStock: async (params) => {
    let { id, userId } = params
    return await PlantForSale.findOneAndUpdate({ id, userId });
  },
  updateStock: async (params) => {
    let { id, count } = params
    return await PlantForSale.findOneAndUpdate({ id, count });
  },
  listOrders: async (userId) => {
    return await Order.find({ where:{userId} });
  },
  fetchOrderDetails: async (id) => {
    return await Order.find({ where: { id } });
  },
  updateOrderStatus: async (params) => {
    let {id,data}=params
    return await Order.findOneAndUpdate({ id } ,{data});
  },
};
