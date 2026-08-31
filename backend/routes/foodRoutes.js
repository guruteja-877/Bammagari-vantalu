const express = require("express");

const {
  createFood,
  getAllFoods,
  getFoodById,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const router = express.Router();

// ==================== Public Routes ====================

// Get All Foods
router.get("/", getAllFoods);

// Get Food By ID
router.get("/:id", getFoodById);

// ==================== Admin Routes ====================

// Create Food
router.post("/", protect, admin, createFood);

// Update Food
router.put("/:id", protect, admin, updateFood);

// Delete Food
router.delete("/:id", protect, admin, deleteFood);

module.exports = router;