const buyerService = require('../services/buyerService');
module.exports = {
  completeBuyerProfile: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await buyerService.completeBuyerProfile(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  addPlantToCart: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await buyerService.addPlantToCart(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  addPlantTowishlist: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await buyerService.addPlantTowishlist(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
};
