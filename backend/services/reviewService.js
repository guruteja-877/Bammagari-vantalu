const Review = require("../models/Review");
const Food = require("../models/Food");
const ApiError = require("../utils/ApiError");

class ReviewService {
  // Create Review
  async createReview(userId, data) {
    const { food, rating, comment } = data;

    const foodItem = await Food.findById(food);

    if (!foodItem) {
      throw new ApiError(404, "Food not found.");
    }

    const existingReview = await Review.findOne({
      user: userId,
      food,
    });

    if (existingReview) {
      throw new ApiError(
        409,
        "You have already reviewed this food."
      );
    }

    const review = await Review.create({
      user: userId,
      food,
      rating,
      comment,
    });

    return await Review.findById(review._id)
      .populate("user", "name profileImage")
      .populate("food", "name image");
  }

  // Get Reviews By Food
  async getReviewsByFood(foodId) {
    const food = await Food.findById(foodId);

    if (!food) {
      throw new ApiError(404, "Food not found.");
    }

    return await Review.find({
      food: foodId,
      isApproved: true,
    })
      .populate("user", "name profileImage")
      .sort({ createdAt: -1 });
  }

  // Get Logged-in User Reviews
  async getUserReviews(userId) {
    return await Review.find({
      user: userId,
    })
      .populate("food", "name image")
      .sort({ createdAt: -1 });
  }

  // Update Review
  async updateReview(userId, reviewId, data) {
    const review = await Review.findById(reviewId);

    if (!review) {
      throw new ApiError(404, "Review not found.");
    }

    if (review.user.toString() !== userId.toString()) {
      throw new ApiError(
        403,
        "You are not allowed to update this review."
      );
    }

    if (data.rating !== undefined) {
      review.rating = data.rating;
    }

    if (data.comment !== undefined) {
      review.comment = data.comment;
    }

    await review.save();

    return await Review.findById(review._id)
      .populate("user", "name profileImage")
      .populate("food", "name image");
  }

  // Delete Review
  async deleteReview(userId, reviewId) {
    const review = await Review.findById(reviewId);

    if (!review) {
      throw new ApiError(404, "Review not found.");
    }

    if (review.user.toString() !== userId.toString()) {
      throw new ApiError(
        403,
        "You are not allowed to delete this review."
      );
    }

    await Review.findOneAndDelete({
      _id: reviewId,
    });

    return {
      message: "Review deleted successfully.",
    };
  }
}

module.exports = new ReviewService();