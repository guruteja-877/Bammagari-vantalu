const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");
const {
  registerValidation,
  loginValidation,
} = require("../validations/authValidation");

// Public Routes
router.post(
  "/register",
  validate(registerValidation),
  authController.register
);

router.post(
  "/login",
  validate(loginValidation),
  authController.login
);

// Private Routes
router.get(
  "/profile",
  protect,
  authController.getProfile
);

module.exports = router;