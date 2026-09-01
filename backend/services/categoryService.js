const Category = require("../models/Category");
const Food = require("../models/Food");
const ApiError = require("../utils/ApiError");

class CategoryService {
  // Create Category
  async createCategory(data) {
    const { name, description, image, displayOrder } = data;

    const existingCategory = await Category.findOne({
      name: { $regex: new RegExp(`^${name}$`, "i") },
    });

    if (existingCategory) {
      throw new ApiError(409, "Category already exists.");
    }

    const category = await Category.create({
      name,
      description,
      image,
      displayOrder,
    });

    return category;
  }

  // Get All Categories
  async getAllCategories() {
    return await Category.find().sort({
      displayOrder: 1,
      createdAt: -1,
    });
  }

  // Get Active Categories
  async getActiveCategories() {
    return await Category.find({
      isActive: true,
    }).sort({
      displayOrder: 1,
    });
  }

  // Get Category By ID
  async getCategoryById(id) {
    const category = await Category.findById(id);

    if (!category) {
      throw new ApiError(404, "Category not found.");
    }

    return category;
  }

  // Update Category
  async updateCategory(id, data) {
    const category = await Category.findById(id);

    if (!category) {
      throw new ApiError(404, "Category not found.");
    }

    if (data.name) {
      const duplicate = await Category.findOne({
        _id: { $ne: id },
        name: { $regex: new RegExp(`^${data.name}$`, "i") },
      });

      if (duplicate) {
        throw new ApiError(409, "Category already exists.");
      }

      category.name = data.name;
    }

    if (data.description !== undefined)
      category.description = data.description;

    if (data.image !== undefined)
      category.image = data.image;

    if (data.displayOrder !== undefined)
      category.displayOrder = data.displayOrder;

    if (data.isActive !== undefined)
      category.isActive = data.isActive;

    await category.save();

    return category;
  }

  // Delete Category
  async deleteCategory(id) {
    const category = await Category.findById(id);

    if (!category) {
      throw new ApiError(404, "Category not found.");
    }

    const foods = await Food.countDocuments({
      category: id,
    });

    if (foods > 0) {
      throw new ApiError(
        400,
        "Cannot delete category because it is assigned to one or more food items."
      );
    }

    await category.deleteOne();

    return {
      message: "Category deleted successfully.",
    };
  }
}

module.exports = new CategoryService();