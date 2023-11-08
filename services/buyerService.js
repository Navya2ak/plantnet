const BuyerModel = require('../models/buyer');
module.exports = {
  completeBuyerProfile: async (data) => {
    try {
      let {
        userId,
        buyerName,
        photo,
        deliveryLocationDetails,
        residentialAddress,
        residentialPincode,
      } = data;
      await BuyerModel.findOneAndUpdate(
        { userId },
        {
          userId,
          buyerName,
          photo,
          deliveryLocationDetails,
          residentialAddress,
          residentialPincode,
        },
      );
      return 'Buyer Profile Updated';
    } catch (e) {
      throw new Error(e);
    }
  },
};
