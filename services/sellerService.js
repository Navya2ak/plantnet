const SellerModel = require('../models/seller');
module.exports = {
  updateSellerProfile: async (data) => {
    let { phoneNumber, personalAddress, photo, gender, sellingSince } = data;
    await SellerModel.findOneAndUpdate(phoneNumber, {
      personalAddress,
      photo,
      gender,
      sellingSince,
    });
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
