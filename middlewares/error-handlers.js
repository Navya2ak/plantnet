const { StatusCodes } = require('http-status-codes');
const {
  BadRequestError,
  NotFoundError,
} = require('../exceptions/requestException');
const errorHandler = (error, req, res, next) => {
  switch (error.status) {
    case 400:
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: error.message,
        status: 400,
      });
    case 401:
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: error.message,
        status: 401,
      });
    case 404:
      return res.status(StatusCodes.NOT_FOUND).json({
        message: error.message,
        status: 404,
      });
    default:
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.message,
        status: 500,
      });
  }
};
module.exports = errorHandler;
