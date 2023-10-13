const express = require('express');
const user = express.Router();
const userContorller = require('../controllers/userController');

auth.post('/update/seller/profile', userContorller.updateSellerProfile);
auth.post('/update/buyer/profile', userContorller.updateBuyerProfile);
