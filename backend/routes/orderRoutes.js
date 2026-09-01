const express = require("express");

const { placeOrder, getMyOrders, } = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Place Order
router.post("/", protect, placeOrder);
// Get My Orders
router.get("/", protect, getMyOrders);

module.exports = router;