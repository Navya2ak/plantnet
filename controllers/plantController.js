const plantService = require('../services/plantService');
module.exports = {
  bulkInserCateories: async (req, res, next) => {
    try {
      let response = await plantService.bulkInserCateories();
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  listPlantsCateogeries: async (req, res, next) => {
    try {
      let response = await plantService.listPlantsCategories();
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  // plant details
  // plant statistics
  // edit plant
  // audio video upload
  // orders list
  // order details
  // order accept
  // order status updation
  
};
