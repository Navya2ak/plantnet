const express = require('express');
const adminController = require('../controllers/adminControlller');
const plant = express.Router();
const { verifyToken } = require('../helper/jwt.service');
plant.post(
    '/insert/categories',
    verifyToken,
    adminController.bulkInserCateories,
);

module.exports = admin;
