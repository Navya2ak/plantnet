const authService = require('../services/authService');

module.exports = {
  signin: async (req, res, next) => {
    try {
      let response = await authService.signin(req.body);
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },

  signup: async (req, res, next) => {
    try {
      let response = await authService.signup(req.body);
      return res.status(200).json({ data: response });
    } catch (error) {
      return next(error);
    }
  },
  otpVerify: async (req, res, next) => {
    try {
      let response = await authService.verifyOtp(req.body);
      return res.status(200).json({ data: response });
    } catch (error) {
      return next(error);
    }
  },
};
