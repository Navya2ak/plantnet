const Usermodel = require('../models/user');
module.exports = {
  updateSellerProfile: async (data) => {
    let { sellerName, phoneNumber } = data;
    await Usermodel.findOneAndUpdate(phoneNumber, { sellerName });
  },
  updateBuyerProfile: async (data) => {
    let { name, phoneNumber } = data;
    await Usermodel.findOneAndUpdate(phoneNumber, { name });
  },
};
