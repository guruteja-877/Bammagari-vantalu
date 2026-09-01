const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
  addToCartValidation,
  updateCartValidation,
} = require("../validations/cartValidation");

// ==============================
// All Cart Routes Require Login
// ==============================

// Get Logged-in User Cart
router.get(
  "/",
  protect,
  cartController.getCart
);

// Add Item To Cart
router.post(
  "/",
  protect,
  validate(addToCartValidation),
  cartController.addToCart
);

// Update Item Quantity
router.put(
  "/",
  protect,
  validate(updateCartValidation),
  cartController.updateQuantity
);

// Remove Item From Cart
router.delete(
  "/:foodId",
  protect,
  cartController.removeItem
);

// Clear Cart
router.delete(
  "/",
  protect,
  cartController.clearCart
);

module.exports = router;