const buyerService = require('../services/buyerService');
module.exports = {
  updateBuyerProfile: async (req, res, next) => {
    try {
      let response = await buyerService.updateBuyerProfile(req.body);
      return res.status.json({ response });
    } catch (e) {
      return next(e)
    }
  },
  completeBuyerProfile: async (req, res, next) => {
    try {
      let response = await buyerService.completeBuyerProfile(req.body);
      return res.status.json({ response });
    } catch (e) {
      return next(e)
    }
  },
};
