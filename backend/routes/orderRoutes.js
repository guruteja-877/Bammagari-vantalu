const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
const { protect, authorize } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
  createOrderValidation,
  updateOrderStatusValidation,
} = require("../validations/orderValidation");

// =======================================
// User Routes
// =======================================

// Place Order
router.post(
  "/",
  protect,
  validate(createOrderValidation),
  orderController.createOrder
);

// Get Logged-in User Orders
router.get(
  "/my-orders",
  protect,
  orderController.getUserOrders
);

// Get Single Order
router.get(
  "/:id",
  protect,
  orderController.getOrderById
);

// =======================================
// Admin Routes
// =======================================

// Get All Orders
router.get(
  "/",
  protect,
  authorize("admin"),
  orderController.getAllOrders
);

// Update Order Status
router.patch(
  "/:id/status",
  protect,
  authorize("admin"),
  validate(updateOrderStatusValidation),
  orderController.updateOrderStatus
);

module.exports = router;