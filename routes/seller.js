const express = require('express');
const sellerController = require('../controllers/sellerController');
const seller = express.Router();
seller.post('/update/personal/info', sellerController.updateSellerProfile);
seller.post('/update/store/info', sellerController.updateSellerProfile);
seller.post('/complete/profile', sellerController.completeSellerProfile);
module.exports = seller;
