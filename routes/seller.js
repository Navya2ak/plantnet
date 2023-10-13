const express = require('express');
const sellerController = require('../controllers/sellerController');
const seller = express.Router();
seller.post('update/profile', sellerController.updateSellerProfile);
module.exports = seller;
