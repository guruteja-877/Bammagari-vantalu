const asyncHandler = require("../middleware/asyncHandler");
const categoryService = require("../services/categoryService");
const ApiResponse = require("../utils/ApiResponse");

// @desc Create Category
// @route POST /api/categories
// @access Admin
exports.createCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.createCategory(req.body);

  return res.status(201).json(
    new ApiResponse(
      201,
      category,
      "Category created successfully."
    )
  );
});

// @desc Get All Categories
// @route GET /api/categories
// @access Public
exports.getAllCategories = asyncHandler(async (req, res) => {
  const categories = await categoryService.getAllCategories();

  return res.status(200).json(
    new ApiResponse(
      200,
      categories,
      "Categories fetched successfully."
    )
  );
});

// @desc Get Active Categories
// @route GET /api/categories/active
// @access Public
exports.getActiveCategories = asyncHandler(async (req, res) => {
  const categories = await categoryService.getActiveCategories();

  return res.status(200).json(
    new ApiResponse(
      200,
      categories,
      "Active categories fetched successfully."
    )
  );
});

// @desc Get Category By ID
// @route GET /api/categories/:id
// @access Public
exports.getCategoryById = asyncHandler(async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.id);

  return res.status(200).json(
    new ApiResponse(
      200,
      category,
      "Category fetched successfully."
    )
  );
});

// @desc Update Category
// @route PUT /api/categories/:id
// @access Admin
exports.updateCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.updateCategory(
    req.params.id,
    req.body
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      category,
      "Category updated successfully."
    )
  );
});

// @desc Delete Category
// @route DELETE /api/categories/:id
// @access Admin
exports.deleteCategory = asyncHandler(async (req, res) => {
  const result = await categoryService.deleteCategory(req.params.id);

  return res.status(200).json(
    new ApiResponse(
      200,
      result,
      "Category deleted successfully."
    )
  );
});