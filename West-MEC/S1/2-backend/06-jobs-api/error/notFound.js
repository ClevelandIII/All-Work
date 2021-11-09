const { statusCode } = require("http-status-codes");
const { CustomError } = require("./custom-api-error");

class notFound extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = statusCode.Not_Found;
  }
}

module.exports = notFound;
