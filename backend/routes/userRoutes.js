const express = require("express");
const router = express.Router();

const userController = require("../controllers/userContoller");

const { protect, authorize } = require("../middleware/authMiddleware");
const validate = require("../middleware/validationMiddleware");

const {
  updateProfileValidation,
  updateAddressValidation,
  changePasswordValidation,
} = require("../validations/userValidation");

// ==============================
// Logged-in User Routes
// ==============================

// Get Profile
router.get(
  "/profile",
  protect,
  userController.getProfile
);

// Update Profile
router.put(
  "/profile",
  protect,
  validate(updateProfileValidation),
  userController.updateProfile
);

// Update Address
router.put(
  "/address",
  protect,
  validate(updateAddressValidation),
  userController.updateAddress
);

// Change Password
router.put(
  "/change-password",
  protect,
  validate(changePasswordValidation),
  userController.changePassword
);

// ==============================
// Admin Routes
// ==============================

// Get All Users
router.get(
  "/",
  protect,
  authorize("admin"),
  userController.getAllUsers
);

// Get User By ID
router.get(
  "/:id",
  protect,
  authorize("admin"),
  userController.getUserById
);

// Activate / Deactivate User
router.patch(
  "/:id/status",
  protect,
  authorize("admin"),
  userController.toggleUserStatus
);

// Delete User
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  userController.deleteUser
);

module.exports = router;