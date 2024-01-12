const userController = require('../controllers/userController');
const upload = require('../helper/fileupload.service');
const express = require('express');
const user = express.Router();
const { verifyToken } = require('../helper/jwt.service');

user.post(
  '/upload/profile/pic',
  verifyToken,
  upload.single('file'),
  userController.uploadProfilePicture,
);
module.exports = user;
