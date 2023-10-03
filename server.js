const express = require('express');
const errorHandler = require('./middlewares/error-handlers');
const connectDb = require('./config/db-connection');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.SERVICE_PORT;
const { authRouter } = require('./routes');

connectDb(); //mongodb connection

//routes
app.use('api/auth', authRouter);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
