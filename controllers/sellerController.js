const userService = require('../services/userService');
module.exports = {
  updateSellerProfile: async (req, res, next) => {
    try {
      let response = await userService.updateSellerProfile(req.body);
      return res.status.json({ response });
    } catch (e) {
      return e;
    }
  },
};
