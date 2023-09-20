const express = require("express");
const authentication = express.Router();

authentication.get("/", (req, res) => {
  res.status(200).json({ status: 200, message: "Request arrived here" });
});

module.exports = authentication;
