const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/reviewController");
const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
  createReviewValidation,
  updateReviewValidation,
} = require("../validations/reviewValidation");

// =======================================
// Public Routes
// =======================================

// Get Reviews By Food
router.get(
  "/food/:foodId",
  reviewController.getReviewsByFood
);

// =======================================
// Private Routes
// =======================================

// Create Review
router.post(
  "/",
  protect,
  validate(createReviewValidation),
  reviewController.createReview
);

// Get Logged-in User Reviews
router.get(
  "/my-reviews",
  protect,
  reviewController.getUserReviews
);

// Update Review
router.put(
  "/:id",
  protect,
  validate(updateReviewValidation),
  reviewController.updateReview
);

// Delete Review
router.delete(
  "/:id",
  protect,
  reviewController.deleteReview
);

module.exports = router;