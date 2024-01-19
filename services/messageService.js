const { BadRequestError } = require('../exceptions/requestException');

module.exports = {
  sendMessage: async (req, res) => {
    try {
      return 'Message Send';
    } catch (error) {
      throw new BadRequestError(error);
    }
  },
};
