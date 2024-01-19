const express = require('express');
const user = express.Router();
const { verifyToken } = require('../helper/jwt.service');
const messageController = require('../controllers/messageController');
user.post('/send', verifyToken, messageController.sendMessage);
module.exports = user;
