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
};
