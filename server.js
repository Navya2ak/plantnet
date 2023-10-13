const express = require('express');
const errorHandler = require('./middlewares/error-handlers');
const connectDb = require('./config/db-connection');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.SERVICE_PORT;
const { authRouter, sellerRouter, buyerRouter } = require('./routes');

connectDb(); //mongodb connection
app.use(express.json());
//routes
app.use('/api/auth', authRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/buyer', buyerRouter);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
