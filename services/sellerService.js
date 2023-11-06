const { BadRequestError } = require('../exceptions/requestException');
const SellerModel = require('../models/seller');
module.exports = {
  updateSellerProfile: async (data) => {
    try {
      let { phoneNumber, personalAddress, photo, gender, sellingSince } = data;
      let updated = await SellerModel.findOneAndUpdate(
        { phoneNumber },
        {
          personalAddress,
          storePhoto,
          sellingSince,
        },
      );
      return 'Profile upated' + updated;
    } catch (e) {
      throw new BadRequestError(e);
    }
  },
  completeSellerProfile: async (data) => {
    let {
      sellerName,
      phoneNumber,
      storeLocation,
      storePincode,
      address,
      storePhoto,
      openingTime,
      closingTime,
      workingDays,
    } = data;
    await SellerModel.findOneAndUpdate(phoneNumber, {
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
