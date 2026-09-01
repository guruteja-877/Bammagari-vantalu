const { body } = require("express-validator");

const allowedRegions = [
  "Hyderabad",
  "Andhra",
  "Rayalaseema",
  "Telangana",
  "Godavari",
  "Nellore",
  "Coastal Andhra",
];

exports.createFoodValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Food name is required.")
    .isLength({ min: 3, max: 100 })
    .withMessage("Food name must be between 3 and 100 characters."),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required.")
    .isLength({ min: 10, max: 1000 })
    .withMessage("Description must be between 10 and 1000 characters."),

  body("price")
    .notEmpty()
    .withMessage("Price is required.")
    .isFloat({ min: 1 })
    .withMessage("Price must be greater than 0."),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required.")
    .isMongoId()
    .withMessage("Invalid category id."),

  body("region")
    .trim()
    .notEmpty()
    .withMessage("Region is required.")
    .isIn(allowedRegions)
    .withMessage("Invalid region."),

  body("images")
    .isArray({ min: 1 })
    .withMessage("At least one image is required."),

  body("images.*")
    .isString()
    .withMessage("Each image must be a valid string."),

  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stock cannot be negative."),

  body("rating")
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage("Rating must be between 0 and 5."),

  body("isVeg")
    .isBoolean()
    .withMessage("isVeg must be true or false."),

  body("isFeatured")
    .optional()
    .isBoolean()
    .withMessage("isFeatured must be true or false."),

  body("isBestSeller")
    .optional()
    .isBoolean()
    .withMessage("isBestSeller must be true or false."),

  body("isAvailable")
    .optional()
    .isBoolean()
    .withMessage("isAvailable must be true or false."),
];

exports.updateFoodValidation = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage("Food name must be between 3 and 100 characters."),

  body("description")
    .optional()
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage("Description must be between 10 and 1000 characters."),

  body("price")
    .optional()
    .isFloat({ min: 1 })
    .withMessage("Price must be greater than 0."),

  body("category")
    .optional()
    .isMongoId()
    .withMessage("Invalid category id."),

  body("region")
    .optional()
    .isIn(allowedRegions)
    .withMessage("Invalid region."),

  body("images")
    .optional()
    .isArray()
    .withMessage("Images must be an array."),

  body("images.*")
    .optional()
    .isString()
    .withMessage("Each image must be a valid string."),

  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stock cannot be negative."),

  body("rating")
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage("Rating must be between 0 and 5."),

  body("isVeg")
    .optional()
    .isBoolean()
    .withMessage("isVeg must be true or false."),

  body("isFeatured")
    .optional()
    .isBoolean()
    .withMessage("isFeatured must be true or false."),

  body("isBestSeller")
    .optional()
    .isBoolean()
    .withMessage("isBestSeller must be true or false."),

  body("isAvailable")
    .optional()
    .isBoolean()
    .withMessage("isAvailable must be true or false."),
];