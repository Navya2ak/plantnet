const buyerService = require('../services/buyerService');
module.exports = {
  completeBuyerProfile: async (req, res, next) => {
    try {
      let response = await buyerService.completeBuyerProfile(req.body);
      return res.status.json({ response });
    } catch (e) {
      return next(e);
    }
  },
};
