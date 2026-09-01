const { body } = require("express-validator");

exports.createReviewValidation = [
  body("food")
    .trim()
    .notEmpty()
    .withMessage("Food ID is required.")
    .isMongoId()
    .withMessage("Invalid Food ID."),

  body("rating")
    .notEmpty()
    .withMessage("Rating is required.")
    .isFloat({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5."),

  body("comment")
    .trim()
    .notEmpty()
    .withMessage("Review comment is required.")
    .isLength({ min: 5, max: 500 })
    .withMessage("Comment must be between 5 and 500 characters."),
];

exports.updateReviewValidation = [
  body("rating")
    .optional()
    .isFloat({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5."),

  body("comment")
    .optional()
    .trim()
    .isLength({ min: 5, max: 500 })
    .withMessage("Comment must be between 5 and 500 characters."),
];