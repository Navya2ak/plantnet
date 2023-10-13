const Usermodel = require('../models/user');
module.exports = {
  updateBuyerProfile: async (data) => {
    let { name, phoneNumber } = data;
    await Usermodel.findOneAndUpdate(phoneNumber, { name });
  },
};
