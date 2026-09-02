const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

const { protect, authorize } = require("../middleware/authMiddleware");
const validate = require("../middleware/validationMiddleware");

const {
  createCategoryValidation,
  updateCategoryValidation,
} = require("../validations/categoryValidation");

// ==============================
// Public Routes
// ==============================

// Get All Categories
router.get(
  "/",
  categoryController.getAllCategories
);

// Get Active Categories
router.get(
  "/active",
  categoryController.getActiveCategories
);

// Get Category By ID
router.get(
  "/:id",
  categoryController.getCategoryById
);

// ==============================
// Admin Routes
// ==============================

// Create Category
router.post(
  "/",
  protect,
  authorize("admin"),
  validate(createCategoryValidation),
  categoryController.createCategory
);

// Update Category
router.put(
  "/:id",
  protect,
  authorize("admin"),
  validate(updateCategoryValidation),
  categoryController.updateCategory
);

// Delete Category
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  categoryController.deleteCategory
);

module.exports = router;
