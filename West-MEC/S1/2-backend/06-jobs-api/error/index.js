const BadRequest = require("./bad-request");
const CustomError = require("./custom-api-error");
const notFound = require("./notFound");
const Unauth = require("./unauthenticated");

module.exports = {
  BadRequest,
  CustomError,
  notFound,
  Unauth,
};
