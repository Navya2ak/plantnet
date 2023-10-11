const authService = require('../services/authService');
const user = require('../models/user');
module.exports = {
  signin: async (req, res, next) => {
    try {
      let { name, phoneNumber, userType } = req.body;
      let count = await user.create({
        name,
        phoneNumber,
        userType,
      });
      console.log(count);

      let response = await authService.signin();
      return res.status(200).json({ response });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};
