const express = require('express');
const sellerController = require('../controllers/sellerController');
const seller = express.Router();
const { verifyToken } = require('../helper/jwt.service');

seller.post(
  '/update/personal/info',
  verifyToken,
  sellerController.updateSellerPersonalinfo,
);
seller.post(
  '/update/store/info',
  verifyToken,
  sellerController.updateSellerStoreinfo,
);
seller.post('/plant/add', verifyToken, sellerController.addPlantsforSale);
seller.post('/rating', verifyToken, sellerController.currentShopRating);

module.exports = seller;
