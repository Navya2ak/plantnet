const buyerService = require('../services/buyerService');
module.exports = {
  completeBuyerProfile: async (req, res, next) => {
    try {
      let response = await buyerService.completeBuyerProfile(req.body);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  addPlantToCart: async (req, res, next) => {
    try {
      let response = await buyerService.addPlantToCart(req.body);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
};
