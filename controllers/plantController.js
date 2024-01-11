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
      console.log('req', req.userId);
      console.log('next', next);

      let response = await plantService.listPlantsCategories();
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  pickPlantCategories: async (req, res, next) => {
    try {
      let response = await plantService.pickPlantsCategories(req.body);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
};
