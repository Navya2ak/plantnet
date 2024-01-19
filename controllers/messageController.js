const messageService = require('../services/messageService');
module.exports = {
  sendMessage: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await messageService.sendMessage(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
};
