const asyncHandler = require("../middleware/asyncHandler");
const userService = require("../services/userService");
const ApiResponse = require("../utils/ApiResponse");

// @desc Get Logged-in User Profile
// @route GET /api/users/profile
// @access Private
exports.getProfile = asyncHandler(async (req, res) => {
  const user = await userService.getProfile(req.user._id);

  return res.status(200).json(
    new ApiResponse(200, user, "Profile fetched successfully.")
  );
});

// @desc Update Profile
// @route PUT /api/users/profile
// @access Private
exports.updateProfile = asyncHandler(async (req, res) => {
  const user = await userService.updateProfile(req.user._id, req.body);

  return res.status(200).json(
    new ApiResponse(200, user, "Profile updated successfully.")
  );
});

// @desc Update Address
// @route PUT /api/users/address
// @access Private
exports.updateAddress = asyncHandler(async (req, res) => {
  const address = await userService.updateAddress(
    req.user._id,
    req.body
  );

  return res.status(200).json(
    new ApiResponse(200, address, "Address updated successfully.")
  );
});

// @desc Change Password
// @route PUT /api/users/change-password
// @access Private
exports.changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  const result = await userService.changePassword(
    req.user._id,
    currentPassword,
    newPassword
  );

  return res.status(200).json(
    new ApiResponse(200, result, "Password changed successfully.")
  );
});

// @desc Get All Users
// @route GET /api/users
// @access Admin
exports.getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers();

  return res.status(200).json(
    new ApiResponse(200, users, "Users fetched successfully.")
  );
});

// @desc Get User By ID
// @route GET /api/users/:id
// @access Admin
exports.getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id);

  return res.status(200).json(
    new ApiResponse(200, user, "User fetched successfully.")
  );
});

// @desc Activate / Deactivate User
// @route PATCH /api/users/:id/status
// @access Admin
exports.toggleUserStatus = asyncHandler(async (req, res) => {
  const user = await userService.toggleUserStatus(req.params.id);

  return res.status(200).json(
    new ApiResponse(
      200,
      user,
      "User status updated successfully."
    )
  );
});

// @desc Delete User
// @route DELETE /api/users/:id
// @access Admin
exports.deleteUser = asyncHandler(async (req, res) => {
  const result = await userService.deleteUser(req.params.id);

  return res.status(200).json(
    new ApiResponse(200, result, "User deleted successfully.")
  );
});