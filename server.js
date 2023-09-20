const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.SERVICE_PORT;

app.use("/api/plantnet", require("./routes/authentication")); //act as middleware

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
