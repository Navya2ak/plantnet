const { BadRequestError } = require('../exceptions/requestException');
const SellerModel = require('../models/seller');
module.exports = {
  updateSellerPersonalinfo: async (data) => {
    try {
      let { userId, age, farmerSince, sellerName, personalAddress } = data;
      await SellerModel.findOneAndUpdate(
        { userId },
        {
          sellerName,
          age,
          farmerSince,
          personalAddress,
        },
      );
      return 'Personal Info Updated';
    } catch (e) {
      throw new BadRequestError(e);
    }
  },
  updateSellerStoreinfo: async (data) => {
    try {
      let {
        userId,
        storeLocation,
        storePhoto,
        openingTime,
        closingTime,
        workingDays,
      } = data;
      await SellerModel.findOneAndUpdate(
        { userId },
        {
          storeLocation,
          storePhoto,
          openingTime,
          closingTime,
          workingDays,
        },
      );
      return 'Store Info Updated';
    } catch (e) {
      throw new BadRequestError(e);
    }
  },
};
