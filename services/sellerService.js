const { BadRequestError } = require('../exceptions/requestException');
const SellerModel = require('../models/seller');
module.exports = {
  updateSellerProfile: async (data) => {
    try {
      let { userId, age, storePhoto, farmerSince } = data;
      await SellerModel.findOneAndUpdate(
        { userId },
        {
          age,
          storePhoto,
          farmerSince,
        },
      );
      return 'Profile upated';
    } catch (e) {
      throw new BadRequestError(e);
    }
  },
  completeSellerProfile: async (data) => {
    let {
      sellerName,
      userId,
      storeLocation,
      storePincode,
      address,
      storePhoto,
      openingTime,
      closingTime,
      workingDays,
    } = data;
    await SellerModel.findOneAndUpdate(userId, {
      sellerName,
      storeLocation,
      storePincode,
      address,
      storePhoto,
      openingTime,
      closingTime,
      workingDays,
    });
  },
};
