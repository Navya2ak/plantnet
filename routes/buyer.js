const express = require('express');
const buyerController = require('../controllers/buyerController');
const buyer = express.Router();
buyer.post('complete/profile', buyerController.completeBuyerProfile);

module.exports = buyer;
