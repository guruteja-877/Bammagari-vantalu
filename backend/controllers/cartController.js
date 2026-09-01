const asyncHandler = require("../middleware/asyncHandler");
const cartService = require("../services/cartService");
const ApiResponse = require("../utils/ApiResponse");

// @desc Get Logged-in User Cart
// @route GET /api/cart
// @access Private
exports.getCart = asyncHandler(async (req, res) => {
  const cart = await cartService.getCart(req.user._id);

  return res.status(200).json(
    new ApiResponse(
      200,
      cart,
      "Cart fetched successfully."
    )
  );
});

// @desc Add Item To Cart
// @route POST /api/cart
// @access Private
exports.addToCart = asyncHandler(async (req, res) => {
  const { foodId, quantity } = req.body;

  const cart = await cartService.addToCart(
    req.user._id,
    foodId,
    quantity
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      cart,
      "Item added to cart successfully."
    )
  );
});

// @desc Update Cart Item Quantity
// @route PUT /api/cart
// @access Private
exports.updateQuantity = asyncHandler(async (req, res) => {
  const { foodId, quantity } = req.body;

  const cart = await cartService.updateQuantity(
    req.user._id,
    foodId,
    quantity
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      cart,
      "Cart updated successfully."
    )
  );
});

// @desc Remove Item From Cart
// @route DELETE /api/cart/:foodId
// @access Private
exports.removeItem = asyncHandler(async (req, res) => {
  const cart = await cartService.removeItem(
    req.user._id,
    req.params.foodId
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      cart,
      "Item removed from cart successfully."
    )
  );
});

// @desc Clear Cart
// @route DELETE /api/cart
// @access Private
exports.clearCart = asyncHandler(async (req, res) => {
  const result = await cartService.clearCart(req.user._id);

  return res.status(200).json(
    new ApiResponse(
      200,
      result,
      "Cart cleared successfully."
    )
  );
});