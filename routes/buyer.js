const express = require('express');
const buyerController = require('../controllers/buyerController');
const buyer = express.Router();
const { verifyToken } = require('../helper/jwt.service');

buyer.post(
  '/complete/profile',
  verifyToken,
  buyerController.completeBuyerProfile,
);
buyer.post('/plant/to/cart', verifyToken, buyerController.addPlantToCart);
buyer.post(
  '/remove/plant/from/cart',
  verifyToken,
  buyerController.removePlantFromCart,
);

buyer.post(
  '/plant/to/wishlist',
  verifyToken,
  buyerController.addPlantTowishlist,
);
buyer.post(
  '/remove/plant/from/wishlist',
  verifyToken,
  buyerController.removePlantFromwishlist,
);

buyer.post('/rate/shop', verifyToken, buyerController.updateRatingofShop);

module.exports = buyer;
