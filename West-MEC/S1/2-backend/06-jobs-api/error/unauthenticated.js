const { statusCode } = require("http-status-codes");
const { CustomError } = require("./custom-api-error");

class Unauth extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = statusCode.Unauthorized;
  }
}

module.exports = Unauth;
