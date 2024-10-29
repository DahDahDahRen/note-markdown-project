const { CustomError } = require("../config/customError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ status: false, msg: err.message });
  }

  res.status(500).json({ status: false, msg: "Something went wrong!" });
};

module.exports = errorHandler;
