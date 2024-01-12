const buyerService = require('../services/sellerService');
const plantService = require('../services/plantService');
module.exports = {
  updateSellerPersonalinfo: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await buyerService.updateSellerPersonalinfo(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  updateSellerStoreinfo: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await buyerService.updateSellerStoreinfo(data);
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
};
