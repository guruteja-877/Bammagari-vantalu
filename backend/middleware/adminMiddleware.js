// const admin = (req, res, next) => {
//   if (req.user && req.user.role === "admin") {
//     return next();
//   }

//   return res.status(403).json({
//     success: false,
//     message: "Access denied. Admin only.",
//   });
// };

// module.exports = admin;

const adminOnly = (req, res, next) => {
  try {
    // Ensure the user is authenticated first
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    // Check if the user has the admin role
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin privileges required.",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Authorization failed.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};

module.exports = { adminOnly };