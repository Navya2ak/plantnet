const buyerService = require('../services/sellerService');
const plantService = require('../services/plantService');
module.exports = {
  updateSellerPersonalinfo: async (req, res, next) => {
    try {
      let response = await buyerService.updateSellerPersonalinfo(req.body);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  updateSellerStoreinfo: async (req, res, next) => {
    try {
      let response = await buyerService.updateSellerStoreinfo(req.body);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  addPlantsforSale: async (req, res, next) => {
    try {
      let response = await plantService.addPlantsforSale(req.body);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
};
