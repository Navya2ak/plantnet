const { BadRequestError } = require('../exceptions/requestException');
const SellerModel = require('../models/seller');
const PlantforSaleModel = require('../models/plantForSale');
module.exports = {
  updateSellerPersonalinfo: async (data) => {
    try {
      let { userId, farmerSince, sellerName, personalAddress } = data;
      await SellerModel.findOneAndUpdate(
        { userId },
        {
          sellerName,
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
      let currentRating = await calculateCurrentRating(sellerId);
      await SellerModel.findOneAndUpdate(
        {
          userId: sellerId,
        },
        {
          currentRating,
        },
      );
      return 'Rating Added' + currentRating;
    } catch (error) {
      throw new Error(error);
    }
  },

  currentShopRating: async (sellerId) => {
    try {
      let currentRating = await SellerModel.findOne(
        {
          userId: sellerId,
        },
        { currentShopRating: 1 },
      );
    } catch (error) {
      throw new Error(error);
    }
  },
};
async function updateStarCount(stars, sellerId) {
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
}

async function calculateCurrentRating(sellerId) {
  let currentRating = await SellerModel.findOne({
    userId: sellerId,
  });
  let totalStars =
    currentRating.oneStar +
    currentRating.twoStar +
    currentRating.threeStar +
    currentRating.fourStar +
    currentRating.fiveStar;

  let rating =
    (currentRating.oneStar * 1 +
      currentRating.twoStar * 2 +
      currentRating.threeStar * 3 +
      currentRating.fourStar * 4 +
      currentRating.fiveStar * 5) /
    totalStars;
  return parseFloat(rating).toFixed(2);
}
