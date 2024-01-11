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
  '/plant/to/wishlist',
  verifyToken,
  buyerController.addPlantTowishlist,
);

module.exports = buyer;
