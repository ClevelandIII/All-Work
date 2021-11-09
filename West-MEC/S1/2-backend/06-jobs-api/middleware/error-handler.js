const {CustomApiError} = require("../error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  //   console.log(err);
  return res.status(500).json(`msg: 'something went wrong'`);
};

module.exports = errorHandler;
