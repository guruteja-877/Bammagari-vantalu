const asyncHandler = require("../middleware/asyncHandler");
const authService = require("../services/authService");
const ApiResponse = require("../utils/ApiResponse");

// @desc Register User
// @route POST /api/auth/register
// @access Public
exports.register = asyncHandler(async (req, res) => {
  const result = await authService.register(req.body);

  return res.status(201).json(
    new ApiResponse(
      201,
      result,
      "User registered successfully."
    )
  );
});

// @desc Login User
// @route POST /api/auth/login
// @access Public
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await authService.login(email, password);

  return res.status(200).json(
    new ApiResponse(
      200,
      result,
      "Login successful."
    )
  );
});

// @desc Get Logged-in User
// @route GET /api/auth/profile
// @access Private
exports.getProfile = asyncHandler(async (req, res) => {
  const user = await authService.getProfile(req.user._id);

  return res.status(200).json(
    new ApiResponse(
      200,
      user,
      "Profile fetched successfully."
    )
  );
});