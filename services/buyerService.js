const BuyerModel = require('../models/buyer');
const CartModel = require('../models/cart');
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
};
