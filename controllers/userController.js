const userService = require('../services/userService');
module.exports = {
  uploadProfilePicture: async (req, res, next) => {
    try {
      let response = await userService.uploadProfilePicture(
        req.file,
        req.body.userId,
      );
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
};
