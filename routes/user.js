const userController = require('../controllers/userController');
const upload = require('../helper/fileupload.service');
const express = require('express');
const user = express.Router();
user.post(
  '/upload/profile/pic',
  upload.single('file'),
  userController.uploadProfilePicture,
);
module.exports = user;
