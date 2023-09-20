const express = require('express');
const authcontroller = require('../controllers/authController');
const authentication = express.Router();

authentication.get('/signin', authcontroller.signin);

module.exports = authentication;
