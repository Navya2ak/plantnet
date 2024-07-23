const sellerService = require('../services/sellerService');
const plantService = require('../services/plantService');
module.exports = {
  updateSellerPersonalinfo: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await sellerService.updateSellerPersonalinfo(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  updateSellerStoreinfo: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await sellerService.updateSellerStoreinfo(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  addPlantsforSale: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await plantService.addPlantsforSale(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  }, 
  deletePlantsfromSale: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await plantService.addPlantsforSale(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  currentShopRating: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await sellerService.currentShopRating(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
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
      let userId = req.user.id
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
};
