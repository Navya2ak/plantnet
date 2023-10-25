const BuyerModel = require('../models/buyer');
module.exports = {
  updateBuyerProfile: async (data) => {
    let { name, phoneNumber } = data;
    await BuyerModel.findOneAndUpdate(phoneNumber, { name });
  },
  completeBuyerProfile: async (data) => {
    let { name, phoneNumber } = data;
    await BuyerModel.findOneAndUpdate(phoneNumber, { name });
  },
};
