const BuyerModel = require('../models/buyer');
const CartModel = require('../models/cart');
const WishlistModel = require('../models/wishlist');
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
      return 'Item Added Your Cart';
    } catch (error) {
      throw new Error(error);
    }
  },
  removePlantFromCart: async (data) => {
    try {
      let { userId, productId } = data;
      await CartModel.deleteOne({
        userId,
        productId,
      });
      return 'Item Removed from Your Cart';
    } catch (error) {
      throw new Error(error);
    }
  },
  addPlantTowishlist: async (data) => {
    try {
      let { userId, productId } = data;
      let product = await WishlistModel.findOne({
        userId,
        productId,
      });
      if (!product) {
        await WishlistModel.create({
          userId,
          productId,
        });

        return 'Added To Your Wishlist';
      }
      await WishlistModel.deleteOne({
        userId,
        productId,
      });
      return 'Removed From Your Wishlist';
    } catch (error) {
      throw new Error(error);
    }
  },
  removePlantFromwishlist: async (data) => {
    try {
      let { userId, productId } = data;
      await WishlistModel.deleteOne({
        userId,
        productId,
      });
      return 'Removed From Your Wishlist';
    } catch (error) {
      throw new Error(error);
    }
  },
  likePlant: async (productId) => {
    try {
      let _id = productId.productId;
      let plant = await PlantforSaleModel.findOne({ _id });
      plant.likes++;
      plant.save();
      return 'Like Added';
    } catch (error) {
      throw new Error(error);
    }
  },
  listWishlist: async (userId) => {
    try {
      let wishLiistedPlants = await WishlistModel.find({ userId, raw: true });
      return wishLiistedPlants;
    } catch (error) {
      throw new Error(error);
    }
  },
};
