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
  deletePlant: async (req, res, next) => {
    try {
      let response = await plantService.deletePlantFromSale(req.body);
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  fetchPlantDetails: async (req, res, next) => {
    try {
      let response = await plantService.fetchPlantDetails(req.query);
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  fetchPlantStatistic: async (req, res, next) => {
    try {
      let response = await plantService.fetchPlantStatistic(req.query);
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  updatePlant: async (req, res, next) => {
    try {
      let response = await plantService.updatePlantDetails(req.body);
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  updatePlantStock: async (req, res, next) => {
    try {
      let response = await plantService.updateStock(req.body);
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  updatePlantStatus: async (req, res, next) => {
    try {
      let response = await plantService.updatePlantAsOutofStock(req.body);
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  listOrders: async (req, res, next) => {
    try {
      let userId=req.user.id
      let response = await plantService.listOrders(userId);
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  fetchOrderDetails: async (req, res, next) => {
    try {
      let response = await plantService.fetchOrderDetails(req.user.id);
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  updateOrderStatus: async (req, res, next) => {
    try {
      let response = await plantService.updateOrderStatus(req.body);
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  // audio video upload
};
