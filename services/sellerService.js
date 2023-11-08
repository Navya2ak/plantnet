const { BadRequestError } = require('../exceptions/requestException');
const SellerModel = require('../models/seller');
const PlantForSale = require('../models/plantForSale');
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
  addPlantsforSale: async (data) => {
    try {
      let {
        userId,
        plantName,
        image,
        description,
        audio,
        video,
        price,
        location,
        discount,
        categoryName,
        nurturingKit,
      } = data;
      await PlantForSale.create({
        userId,
        plantName,
        image,
        description,
        audio,
        video,
        price,
        location,
        discount,
        categoryName,
        nurturingKit,
      });

      return 'Plant Added FOR SALE Section';
    } catch (error) {
      throw new BadRequestError(error);
    }
  },
};
