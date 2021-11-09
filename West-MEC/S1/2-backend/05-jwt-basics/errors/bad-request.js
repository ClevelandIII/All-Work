const CustomApiError = require("./custom-error");
const { statusCode } = require("http-status-codes");

class BadRequest extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = statusCode.Bad_Request;
  }
}

module.exports = BadRequest;
