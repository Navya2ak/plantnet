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
  updateRatingofShop: async (data) => {
    try {
      let { stars, sellerId } = data;
      await updateStarCount(stars, sellerId);
      let currentRating = await calculateCurrentRating();
      await SellerModel.findOneAndUpdate(
        {
          userId: sellerId,
        },
        {
          currentRating,
        },
      );
      return 'Rating Added';
    } catch (error) {
      throw new Error(error);
    }
  },
  updateStarCount: async (stars, sellerId) => {
    let currentRating = await SellerModel.findOne({
      userId: sellerId,
    });
    if (stars == 1) {
      currentRating.oneStar++;
      currentRating.save();
    }
    if (stars == 2) {
      currentRating.twoStar++;
      currentRating.save();
    }
    if (stars == 3) {
      currentRating.threeStar++;
      currentRating.save();
    }
    if (stars == 4) {
      currentRating.fourStar++;
      currentRating.save();
    }
    if (stars == 5) {
      currentRating.fiveStar++;
      currentRating.save();
    }
  },
  calculateCurrentRating: async (sellerId) => {
    let currentRating = await SellerModel.findOne({
      userId: sellerId,
    });
    let rating =
      (currentRating.oneStar +
        currentRating.twoStar +
        currentRating.threeStar +
        currentRating.fourStar +
        currentRating.fiveStar) /
      5;
    return rating;
  },
  currentShopRating: async (sellerId) => {
    try {
      let currentRating = await SellerModel.findOne(
        {
          userId: sellerId,
        },
        { currentShopRating: 1 },
      );
      console.log('===========', currentRating);
    } catch (error) {
      throw new Error(error);
    }
  },
};
