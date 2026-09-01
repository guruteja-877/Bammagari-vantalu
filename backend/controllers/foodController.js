const asyncHandler = require("../middleware/asyncHandler");
const foodService = require("../services/foodService");
const ApiResponse = require("../utils/ApiResponse");

// @desc Create Food
// @route POST /api/foods
// @access Admin
exports.createFood = asyncHandler(async (req, res) => {
  const food = await foodService.createFood(req.body);

  return res.status(201).json(
    new ApiResponse(201, food, "Food created successfully.")
  );
});

// @desc Get All Foods
// @route GET /api/foods
// @access Public
exports.getFoods = asyncHandler(async (req, res) => {
  const foods = await foodService.getFoods(req.query);

  return res.status(200).json(
    new ApiResponse(200, foods, "Foods fetched successfully.")
  );
});

// @desc Get Food By ID
// @route GET /api/foods/:id
// @access Public
exports.getFoodById = asyncHandler(async (req, res) => {
  const food = await foodService.getFoodById(req.params.id);

  return res.status(200).json(
    new ApiResponse(200, food, "Food fetched successfully.")
  );
});

// @desc Update Food
// @route PUT /api/foods/:id
// @access Admin
exports.updateFood = asyncHandler(async (req, res) => {
  const food = await foodService.updateFood(
    req.params.id,
    req.body
  );

  return res.status(200).json(
    new ApiResponse(200, food, "Food updated successfully.")
  );
});

// @desc Delete Food
// @route DELETE /api/foods/:id
// @access Admin
exports.deleteFood = asyncHandler(async (req, res) => {
  const result = await foodService.deleteFood(req.params.id);

  return res.status(200).json(
    new ApiResponse(200, result, "Food deleted successfully.")
  );
});

// @desc Get Featured Foods
// @route GET /api/foods/featured
// @access Public
exports.getFeaturedFoods = asyncHandler(async (req, res) => {
  const foods = await foodService.getFeaturedFoods();

  return res.status(200).json(
    new ApiResponse(
      200,
      foods,
      "Featured foods fetched successfully."
    )
  );
});

// @desc Get Best Seller Foods
// @route GET /api/foods/best-sellers
// @access Public
exports.getBestSellerFoods = asyncHandler(async (req, res) => {
  const foods = await foodService.getBestSellerFoods();

  return res.status(200).json(
    new ApiResponse(
      200,
      foods,
      "Best seller foods fetched successfully."
    )
  );
});

// @desc Get Foods By Category
// @route GET /api/foods/category/:categoryId
// @access Public
exports.getFoodsByCategory = asyncHandler(async (req, res) => {
  const foods = await foodService.getFoodsByCategory(
    req.params.categoryId
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      foods,
      "Category foods fetched successfully."
    )
  );
});

// @desc Get Foods By Region
// @route GET /api/foods/region/:region
// @access Public
exports.getFoodsByRegion = asyncHandler(async (req, res) => {
  const foods = await foodService.getFoodsByRegion(
    req.params.region
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      foods,
      "Region foods fetched successfully."
    )
  );
});

// @desc Get Veg Foods
// @route GET /api/foods/veg
// @access Public
exports.getVegFoods = asyncHandler(async (req, res) => {
  const foods = await foodService.getVegFoods();

  return res.status(200).json(
    new ApiResponse(200, foods, "Veg foods fetched successfully.")
  );
});

// @desc Get Non-Veg Foods
// @route GET /api/foods/non-veg
// @access Public
exports.getNonVegFoods = asyncHandler(async (req, res) => {
  const foods = await foodService.getNonVegFoods();

  return res.status(200).json(
    new ApiResponse(
      200,
      foods,
      "Non-veg foods fetched successfully."
    )
  );
});