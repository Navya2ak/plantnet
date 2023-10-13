const userService = require('../services/userService');
module.exports = {
  updateBuyerProfile: async (req, res, next) => {
    try {
      let response = await userService.updateBuyerProfile(req.body);
      return res.status.json({ response });
    } catch (e) {
      return e;
    }
  },
};
