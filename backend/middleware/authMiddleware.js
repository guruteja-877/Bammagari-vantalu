const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    let token;

    // Check Authorization Header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No Token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    // Verify Token
    console.log("Authorization:", req.headers.authorization);
        console.log("Token:", token);
        console.log("JWT_SECRET:", process.env.JWT_SECRET);

const decoded = jwt.verify(token, process.env.JWT_SECRET);

console.log("Decoded:", decoded);
    // Save user data in request
    req.user = decoded;
    
    console.log("Passing to controller...");
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message:  error.message,
    });
  }
};

module.exports = protect;