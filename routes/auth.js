const express = require('express');
const authcontroller = require('../controllers/authController');
const auth = express.Router();

auth.post('/signin', authcontroller.signin);

module.exports = auth;
