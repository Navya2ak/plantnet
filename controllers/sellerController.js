const buyerService = require('../services/sellerService');
module.exports = {
  updateSellerProfile: async (req, res, next) => {
    try {
      let response = await buyerService.updateSellerProfile(req.body);
      return res.status(200).json({response})
    } catch (e) {
      console.log(e);
      return e;
    }
  },
  completeSellerProfile: async (req, res, next) => {
    try {
      let response = await buyerService.completeSellerProfile(req.body);
      return res.status.json({ response });
    } catch (e) {
      return e;
    }
  },
};
