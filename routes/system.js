const userController = require('../controllers/userController');
const upload = require('../helper/fileupload.service');
const express = require('express');
const user = express.Router();

user.get('/', (req, res) => {
  res.send('hey plantnet!');
});
module.exports = user;
