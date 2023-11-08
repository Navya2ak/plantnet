const { BadRequestError } = require('../exceptions/requestException');
const SellerModel = require('../models/seller');
module.exports = {
  updateSellerPersonalinfo: async (data) => {
    try {
      let { userId, age, storePhoto, farmerSince, sellerName } = data;
      await SellerModel.findOneAndUpdate(
        { userId },
        {
          sellerName,
          age,
          farmerSince,
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
        location,
        storePhoto,
        openingTime,
        closingTime,
        workingDays,
      } = data;
      await SellerModel.findOneAndUpdate(
        { userId },
        {
          location,
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
  addPlantsforSale:async(data)=>{
    try {
      let {plantName,image,description,audio,video}=data
      
    } catch (error) {
      
    }
  }

};
