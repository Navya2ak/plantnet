const { StatusCodes } = require('http-status-codes');
const {
  BadRequestError,
  NotFoundError,
} = require('../exceptions/requestException');
const errorHandler = (error, req, res, next) => {
  console.log('-------', error.status);
  switch (error.name) {
    case 'BadRequestError':
      res.json({
        status: StatusCodes.BAD_REQUEST,
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case 401:
      res.json({
        status: StatusCodes.UNAUTHORIZED,
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case 'NotFoundError':
      res.json({
        status: StatusCodes.NOT_FOUND,
        message: error.message,
        stackTrace: error.stack,
      });
      break;

    default:
      res.json({
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
      break;
  }
};
module.exports = errorHandler;
