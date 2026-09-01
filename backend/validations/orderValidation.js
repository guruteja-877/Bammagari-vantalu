const { body } = require("express-validator");

const allowedPaymentMethods = [
  "COD",
  "ONLINE",
  "CARD",
  "UPI",
];

const allowedOrderStatuses = [
  "Pending",
  "Confirmed",
  "Preparing",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

exports.createOrderValidation = [
  body("shippingAddress.street")
    .trim()
    .notEmpty()
    .withMessage("Street is required.")
    .isLength({ min: 3, max: 100 })
    .withMessage("Street must be between 3 and 100 characters."),

  body("shippingAddress.city")
    .trim()
    .notEmpty()
    .withMessage("City is required.")
    .isLength({ min: 2, max: 50 })
    .withMessage("City must be between 2 and 50 characters."),

  body("shippingAddress.state")
    .trim()
    .notEmpty()
    .withMessage("State is required.")
    .isLength({ min: 2, max: 50 })
    .withMessage("State must be between 2 and 50 characters."),

  body("shippingAddress.postalCode")
    .trim()
    .notEmpty()
    .withMessage("Postal code is required.")
    .matches(/^[1-9][0-9]{5}$/)
    .withMessage("Please enter a valid 6-digit Indian PIN code."),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required.")
    .matches(/^[6-9]\d{9}$/)
    .withMessage("Please enter a valid 10-digit Indian mobile number."),

  body("paymentMethod")
    .trim()
    .notEmpty()
    .withMessage("Payment method is required.")
    .isIn(allowedPaymentMethods)
    .withMessage("Invalid payment method."),

  body("deliveryFee")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Delivery fee cannot be negative."),

  body("tax")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Tax cannot be negative."),
];

exports.updateOrderStatusValidation = [
  body("status")
    .trim()
    .notEmpty()
    .withMessage("Order status is required.")
    .isIn(allowedOrderStatuses)
    .withMessage("Invalid order status."),
];