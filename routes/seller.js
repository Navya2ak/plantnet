const express = require('express');
const sellerController = require('../controllers/sellerController');
const seller = express.Router();
seller.post('/update/personal/info', sellerController.updateSellerPersonalinfo);
seller.post('/update/store/info', sellerController.updateSellerStoreinfo);
module.exports = seller;
