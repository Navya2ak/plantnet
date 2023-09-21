const { StatusCodes } = require('http-status-codes');

const errorHandler = (error, req, res, next) => {
  console.log('error', error);
  switch (res.status) {
    case 400:
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
    case 404:
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
