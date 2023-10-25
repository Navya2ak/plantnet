const express = require('express');
const buyerController = require('../controllers/buyerController');
const buyer = express.Router();
buyer.post('update/profile', buyerController.updateBuyerProfile);
buyer.post('complete/profile', buyerController.completeBuyerProfile);

module.exports = buyer;
