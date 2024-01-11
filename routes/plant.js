const express = require('express');
const plantController = require('../controllers/plantController');
const plant = express.Router();
const { verifyToken } = require('../helper/jwt.service');
plant.post(
  '/insert/categories',
  verifyToken,
  plantController.bulkInserCateories,
);
plant.post(
  '/list/categories',
  verifyToken,
  plantController.listPlantsCateogeries,
);
plant.post('/pick/plant', verifyToken, plantController.pickPlantCategories);

module.exports = plant;
