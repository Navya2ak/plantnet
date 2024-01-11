const express = require('express');
const buyerController = require('../controllers/buyerController');
const buyer = express.Router();
buyer.post('/complete/profile', buyerController.completeBuyerProfile);
buyer.post('/plant/to/cart', buyerController.addPlantToCart);
buyer.post('/plant/to/wishlist', buyerController.addPlantTowishlist);

module.exports = buyer;
