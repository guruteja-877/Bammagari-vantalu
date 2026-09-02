const express = require("express");
const router = express.Router();

const foodController = require("../controllers/foodController");

const { protect, authorize } = require("../middleware/authMiddleware");
const validate = require("../middleware/validationMiddleware");

const {
  createFoodValidation,
  updateFoodValidation,
} = require("../validations/foodValidation");

// ==============================
// Public Routes
// ==============================

// Get Featured Foods
router.get(
  "/featured",
  foodController.getFeaturedFoods
);

// Get Best Seller Foods
router.get(
  "/best-sellers",
  foodController.getBestSellerFoods
);

// Get Veg Foods
router.get(
  "/veg",
  foodController.getVegFoods
);

// Get Non-Veg Foods
router.get(
  "/non-veg",
  foodController.getNonVegFoods
);

// Get Foods By Category
router.get(
  "/category/:categoryId",
  foodController.getFoodsByCategory
);

// Get Foods By Region
router.get(
  "/region/:region",
  foodController.getFoodsByRegion
);

// Get All Foods
// Supports:
// ?page=1
// ?limit=12
// ?search=biryani
// ?sort=price
// ?category=id
// ?region=Hyderabad
router.get(
  "/",
  foodController.getFoods
);

// Get Single Food
router.get(
  "/:id",
  foodController.getFoodById
);

// ==============================
// Admin Routes
// ==============================

// Create Food
router.post(
  "/",
  protect,
  authorize("admin"),
  validate(createFoodValidation),
  foodController.createFood
);

// Update Food
router.put(
  "/:id",
  protect,
  authorize("admin"),
  validate(updateFoodValidation),
  foodController.updateFood
);

// Delete Food
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  foodController.deleteFood
);

module.exports = router;