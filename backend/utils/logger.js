class Logger {
  info(message) {
    console.log(
      `[INFO] [${new Date().toISOString()}] ${message}`
    );
  }

  warn(message) {
    console.warn(
      `[WARN] [${new Date().toISOString()}] ${message}`
    );
  }

  error(error) {
    if (error instanceof Error) {
      console.error(
        `[ERROR] [${new Date().toISOString()}] ${error.message}`
      );

      if (process.env.NODE_ENV === "development") {
        console.error(error.stack);
      }
    } else {
      console.error(
        `[ERROR] [${new Date().toISOString()}] ${error}`
      );
    }
  }
}

module.exports = new Logger();