const express = require("express");

const {
  addToCart,
  getCart,
   updateCartItem,
    removeCartItem,
     clearCart,
} = require("../controllers/cartController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Add to Cart
router.post("/add", protect, addToCart);

// Get Cart
router.get("/", protect, getCart);
router.put("/update/:foodId", protect, updateCartItem);
router.delete("/remove/:foodId", protect, removeCartItem);
router.delete("/clear", protect, clearCart);

module.exports = router;