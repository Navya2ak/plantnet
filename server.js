const express = require('express');
const errorHandler = require('./middlewares/error-handlers');
const connectDb = require('./config/db-connection');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.SERVICE_PORT;
const {
  authRouter,
  sellerRouter,
  buyerRouter,
  plantRouter,
  userRouter,
  messageRouter,
  systemRouter,
} = require('./routes');

connectDb(); //mongodb connection
app.use(express.json());
//routes
app.use('/plantnet', systemRouter);
app.use('/plantnet/api/auth', authRouter);
app.use('/plantnet/api/seller', sellerRouter);
app.use('/plantnet/api/buyer', buyerRouter);
app.use('/plantnet/api/plant', plantRouter);
app.use('/plantnet/api/user', userRouter);
app.use('/plantnet/api/message', messageRouter);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
