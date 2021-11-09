const CustomError = require("./custom-error");
const { statusCode } = require("http-status-codes");

class BadRequest extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = statusCode.Bad_Request;
  }
}

module.exports =BadRequest;
