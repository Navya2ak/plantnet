const express = require('express');
const plantController = require('../controllers/plantController');
const plant = express.Router();
const { verifyToken } = require('../helper/jwt.service');
plant.get(
  '/list/categories',
  verifyToken,
  plantController.listPlantsCateogeries,
);

module.exports = plant;
