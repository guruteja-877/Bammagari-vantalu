class ApiResponse {
  constructor(statusCode, data = null, message = "") {
    this.success = statusCode >= 200 && statusCode < 300;
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
}

module.exports = ApiResponse;