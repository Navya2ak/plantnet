const express = require('express');
const user = express.Router();

user.get('/', (req, res) => {
  res.send('hey plantnet!');
});
module.exports = user;
