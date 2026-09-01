const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || res.statusCode;

  if (statusCode === 200) {
    statusCode = 500;
  }

  const response = {
    success: false,
    message: err.message || "Internal Server Error",
  };

  // Show stack trace only in development
  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
  }

  // Handle Mongoose CastError (Invalid ObjectId)
  if (err.name === "CastError") {
    statusCode = 400;
    response.message = "Invalid resource ID.";
  }

  // Handle Duplicate Key Error
  if (err.code === 11000) {
    statusCode = 409;
    const field = Object.keys(err.keyValue)[0];
    response.message = `${field} already exists.`;
  }

  // Handle Mongoose Validation Error
  if (err.name === "ValidationError") {
    statusCode = 400;
    response.message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
  }

  // Handle JWT Errors
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    response.message = "Invalid authentication token.";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    response.message = "Authentication token has expired.";
  }

  res.status(statusCode).json(response);
};

module.exports = errorHandler;