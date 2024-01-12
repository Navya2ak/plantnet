const BuyerModel = require('../models/buyer');
const CartModel = require('../models/cart');
const wishlistModel = require('../models/wishlist');
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
  addPlantToCart: async (data) => {
    try {
      let { userId, productId } = data;

      const lastCart = await CartModel.findOne({
        userId,
        productId,
      });
      if (lastCart) {
        lastCart.count++;
        lastCart.save();
      }

      await CartModel.updateOne(
        {
          userId,
          productId,
        },
        {
          userId,
          productId,
        },
        { upsert: true },
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  addPlantTowishlist: async (data) => {
    try {
      let { userId, productId } = data;
      let product = await wishlistModel.findOne({
        userId,
        productId,
      });
      if (!product) {
        await wishlistModel.create({
          userId,
          productId,
        });

        return 'Added To Your Wishlist';
      }
      await wishlistModel.deleteOne({
        userId,
        productId,
      });
      return 'Removed From Your Wishlist';
    } catch (error) {
      throw new Error(error);
    }
  },
};
