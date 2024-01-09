const express = require('express');
const plantController = require('../controllers/plantController');
const plant = express.Router();

plant.post('/insert/categories', plantController.bulkInserCateories);
plant.post('/list/categories', plantController.listPlantsCateogeries);
plant.post('/pick/plant', plantController.pickPlantCategories);

module.exports = plant;
