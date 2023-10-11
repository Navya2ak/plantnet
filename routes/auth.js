const express = require('express');
const authcontroller = require('../controllers/authController');
const auth = express.Router();

auth.post('/signin', authcontroller.signin);
auth.post('/signup', authcontroller.signup);
auth.post('/otp/verify', authcontroller.otpVerify);

module.exports = auth;
