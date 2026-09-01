const asyncHandler = require("../middleware/asyncHandler");
const reviewService = require("../services/reviewService");
const ApiResponse = require("../utils/ApiResponse");

// @desc Create Review
// @route POST /api/reviews
// @access Private
exports.createReview = asyncHandler(async (req, res) => {
  const review = await reviewService.createReview(
    req.user._id,
    req.body
  );

  return res.status(201).json(
    new ApiResponse(
      201,
      review,
      "Review added successfully."
    )
  );
});

// @desc Get Reviews By Food
// @route GET /api/reviews/food/:foodId
// @access Public
exports.getReviewsByFood = asyncHandler(async (req, res) => {
  const reviews = await reviewService.getReviewsByFood(
    req.params.foodId
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      reviews,
      "Reviews fetched successfully."
    )
  );
});

// @desc Get Logged-in User Reviews
// @route GET /api/reviews/my-reviews
// @access Private
exports.getUserReviews = asyncHandler(async (req, res) => {
  const reviews = await reviewService.getUserReviews(
    req.user._id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      reviews,
      "User reviews fetched successfully."
    )
  );
});

// @desc Update Review
// @route PUT /api/reviews/:id
// @access Private
exports.updateReview = asyncHandler(async (req, res) => {
  const review = await reviewService.updateReview(
    req.user._id,
    req.params.id,
    req.body
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      review,
      "Review updated successfully."
    )
  );
});

// @desc Delete Review
// @route DELETE /api/reviews/:id
// @access Private
exports.deleteReview = asyncHandler(async (req, res) => {
  const result = await reviewService.deleteReview(
    req.user._id,
    req.params.id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      result,
      "Review deleted successfully."
    )
  );
});