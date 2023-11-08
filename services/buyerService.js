const BuyerModel = require('../models/buyer');
module.exports = {
  completeBuyerProfile: async (data) => {
    try {
      let {
        userId,
        buyerName,
        photo,
        location,
        pincode,
        destinationForDelivery,
      } = data;
      await BuyerModel.findOneAndUpdate(userId, {
        buyerName,
        photo,
        location,
        pincode,
        destinationForDelivery,
      });
    } catch (e) {
      throw new Error(e);
    }
  },
};
