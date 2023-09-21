const express = require('express');
const errorHandler = require('./middlewares/error-handlers');
const connectDb = require('./config/db-connection');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.SERVICE_PORT;

connectDb(); //cmongodb connection

app.use('/api/plantnet', require('./routes/auth')); //act as middleware
app.use(errorHandler);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
