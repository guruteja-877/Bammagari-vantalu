const Food = require("../models/Food");
const Category = require("../models/Category");
const ApiError = require("../utils/ApiError");
const ApiFeatures = require("../utils/apiFeatures");

class FoodService {
  // Create Food
  async createFood(data) {
    const category = await Category.findById(data.category);

    if (!category) {
      throw new ApiError(404, "Category not found.");
    }

    const food = await Food.create(data);

    return await Food.findById(food._id).populate(
      "category",
      "name image"
    );
  }

  // Get All Foods
  async getFoods(query) {
    const features = new ApiFeatures(
      Food.find()
        .populate("category", "name image")
        .sort({ createdAt: -1 }),
      query
    )
      .search()
      .filter()
      .sort()
      .paginate();

    const foods = await features.query;

    return foods;
  }

  // Get Food By ID
  async getFoodById(id) {
    const food = await Food.findById(id)
      .populate("category", "name image");

    if (!food) {
      throw new ApiError(404, "Food not found.");
    }

    return food;
  }

  // Update Food
  async updateFood(id, data) {
    const food = await Food.findById(id);

    if (!food) {
      throw new ApiError(404, "Food not found.");
    }

    if (data.category) {
      const category = await Category.findById(data.category);

      if (!category) {
        throw new ApiError(404, "Category not found.");
      }
    }

    Object.assign(food, data);

    await food.save();

    return await Food.findById(id).populate(
      "category",
      "name image"
    );
  }

  // Delete Food
  async deleteFood(id) {
    const food = await Food.findById(id);

    if (!food) {
      throw new ApiError(404, "Food not found.");
    }

    await food.deleteOne();

    return {
      message: "Food deleted successfully.",
    };
  }

  // Featured Foods
  async getFeaturedFoods() {
    return await Food.find({
      isFeatured: true,
      isAvailable: true,
    })
      .populate("category", "name image")
      .sort({ rating: -1 });
  }

  // Best Sellers
  async getBestSellerFoods() {
    return await Food.find({
      isBestSeller: true,
      isAvailable: true,
    })
      .populate("category", "name image")
      .sort({ totalReviews: -1 });
  }

  // Foods By Category
  async getFoodsByCategory(categoryId) {
    return await Food.find({
      category: categoryId,
      isAvailable: true,
    }).populate("category", "name image");
  }

  // Foods By Region
  async getFoodsByRegion(region) {
    return await Food.find({
      region,
      isAvailable: true,
    }).populate("category", "name image");
  }

  // Veg Foods
  async getVegFoods() {
    return await Food.find({
      isVeg: true,
      isAvailable: true,
    }).populate("category", "name image");
  }

  // Non-Veg Foods
  async getNonVegFoods() {
    return await Food.find({
      isVeg: false,
      isAvailable: true,
    }).populate("category", "name image");
  }
}

module.exports = new FoodService();