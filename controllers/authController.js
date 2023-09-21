const authService = require('../services/authService');
module.exports = {
  signin: async (req, res, next) => {
    try {
      let response = await authService.signin();
      return res.status(200).json({ response });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};
