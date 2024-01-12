class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.status = 404;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.status = 400;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

module.exports = {
  BadRequestError,
  NotFoundError,
};
