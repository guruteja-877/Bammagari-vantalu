const sendResponse = (
  res,
  statusCode = 200,
  success = true,
  message = "Success",
  data = null,
  meta = {}
) => {
  const response = {
    success,
    message,
  };

  if (data !== null) {
    response.data = data;
  }

  if (Object.keys(meta).length > 0) {
    response.meta = meta;
  }

  return res.status(statusCode).json(response);
};

module.exports = sendResponse;