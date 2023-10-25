const express = require('express');
const sellerController = require('../controllers/sellerController');
const seller = express.Router();
seller.post('update/profile', sellerController.updateSellerProfile);
seller.post('complete/profile', sellerController.completeSellerProfile);
module.exports = seller;
