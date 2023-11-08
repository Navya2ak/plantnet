const buyerService = require('../services/sellerService');
module.exports = {
  updateSellerPersonalinfo: async (req, res, next) => {
    try {
      let response = await buyerService.updateSellerPersonalinfo(req.body);
      return res.status(200).json({ response });
    } catch (e) {
      console.log(e);
      return e;
    }
  },
  updateSellerStoreinfo: async (req, res, next) => {
    try {
      let response = await buyerService.updateSellerStoreinfo(req.body);
      return res.status(200).json({ response });
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
