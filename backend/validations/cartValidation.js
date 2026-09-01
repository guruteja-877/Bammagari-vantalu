const { body } = require("express-validator");

exports.addToCartValidation = [
  body("foodId")
    .trim()
    .notEmpty()
    .withMessage("Food ID is required.")
    .isMongoId()
    .withMessage("Invalid Food ID."),

  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required.")
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1."),
];

exports.updateCartValidation = [
  body("foodId")
    .trim()
    .notEmpty()
    .withMessage("Food ID is required.")
    .isMongoId()
    .withMessage("Invalid Food ID."),

  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required.")
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1."),
];