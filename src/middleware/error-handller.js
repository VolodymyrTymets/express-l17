const { STATUS_CODES } = require('http');

const errorHandler = (err, req, res, next) => {
  if (err) {
    console.log(err)
  }
  res
    .status(500)
    .json({
      code: 500,
      message: STATUS_CODES[500],
    });
};

module.exports = { errorHandler };