const express = require('express');
const {BuyerController}  = require('../controllers/index');
const buyer = express.Router();
const { verifyToken } = require('../helper/jwt.service');
buyer.post(
  '/complete/profile',
  verifyToken,
  BuyerController.completeBuyerProfile,
);
buyer.post('/plant/to/cart', verifyToken, BuyerController.addPlantToCart);
buyer.post(
  '/remove/plant/from/cart',
  verifyToken,
  BuyerController.removePlantFromCart,
);

buyer.post(
  '/plant/to/wishlist',
  verifyToken,
  BuyerController.addPlantTowishlist,
);
buyer.post(
  '/remove/plant/from/wishlist',
  verifyToken,
  BuyerController.removePlantFromwishlist,
);

buyer.post('/rate/shop', verifyToken, BuyerController.rateAshop);
buyer.post('/like', verifyToken, BuyerController.likePlant);

module.exports = buyer;
