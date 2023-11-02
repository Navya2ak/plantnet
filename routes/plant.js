const express = require('express');
const plantController = require('../controllers/plantController');
const plant = express.Router();

plant.post('/list', plantController.listPlantsCateogeries);

module.exports = plant;
