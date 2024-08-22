const express = require('express');
const authcontroller = require('../controllers/authController');
const auth = express.Router();
const { verifyToken } = require('../helper/jwt.service');

auth.post('/signin', authcontroller.signin);
auth.post('/signup', authcontroller.signup);
auth.post('/otp/verify', authcontroller.otpVerify);
auth.post('/password/reset', verifyToken, authcontroller.resetPassword);
auth.post('/password/set', verifyToken, authcontroller.setPassword);


module.exports = auth;
