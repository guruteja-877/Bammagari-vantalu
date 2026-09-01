const { body } = require("express-validator");

exports.updateProfileValidation = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be between 3 and 50 characters."),

  body("phone")
    .optional()
    .matches(/^[6-9]\d{9}$/)
    .withMessage("Please enter a valid 10-digit Indian mobile number."),

  body("profileImage")
    .optional()
    .isString()
    .withMessage("Profile image must be a valid string."),
];

exports.updateAddressValidation = [
  body("street")
    .trim()
    .notEmpty()
    .withMessage("Street is required.")
    .isLength({ min: 3, max: 100 })
    .withMessage("Street must be between 3 and 100 characters."),

  body("city")
    .trim()
    .notEmpty()
    .withMessage("City is required.")
    .isLength({ min: 2, max: 50 })
    .withMessage("City must be between 2 and 50 characters."),

  body("state")
    .trim()
    .notEmpty()
    .withMessage("State is required.")
    .isLength({ min: 2, max: 50 })
    .withMessage("State must be between 2 and 50 characters."),

  body("postalCode")
    .trim()
    .notEmpty()
    .withMessage("Postal code is required.")
    .matches(/^[1-9][0-9]{5}$/)
    .withMessage("Please enter a valid 6-digit Indian PIN code."),
];

exports.changePasswordValidation = [
  body("currentPassword")
    .notEmpty()
    .withMessage("Current password is required."),

  body("newPassword")
    .notEmpty()
    .withMessage("New password is required.")
    .isLength({ min: 8 })
    .withMessage("New password must be at least 8 characters long.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_\-+=])[A-Za-z\d@$!%*?&#^()_\-+=]{8,}$/
    )
    .withMessage(
      "New password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),

  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password is required.")
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error("Confirm password does not match the new password.");
      }
      return true;
    }),
];