const asyncHandler = require("../middleware/asyncHandler");
const orderService = require("../services/orderService");
const ApiResponse = require("../utils/ApiResponse");

// @desc Create Order
// @route POST /api/orders
// @access Private
exports.createOrder = asyncHandler(async (req, res) => {
  const order = await orderService.createOrder(
    req.user._id,
    req.body
  );

  return res.status(201).json(
    new ApiResponse(
      201,
      order,
      "Order placed successfully."
    )
  );
});

// @desc Get Logged-in User Orders
// @route GET /api/orders/my-orders
// @access Private
exports.getUserOrders = asyncHandler(async (req, res) => {
  const orders = await orderService.getUserOrders(
    req.user._id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      orders,
      "Orders fetched successfully."
    )
  );
});

// @desc Get Order By ID
// @route GET /api/orders/:id
// @access Private
exports.getOrderById = asyncHandler(async (req, res) => {
  const order = await orderService.getOrderById(
    req.params.id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      order,
      "Order fetched successfully."
    )
  );
});

// @desc Get All Orders
// @route GET /api/orders
// @access Admin
exports.getAllOrders = asyncHandler(async (req, res) => {
  const orders = await orderService.getAllOrders();

  return res.status(200).json(
    new ApiResponse(
      200,
      orders,
      "All orders fetched successfully."
    )
  );
});

// @desc Update Order Status
// @route PATCH /api/orders/:id/status
// @access Admin
exports.updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const order = await orderService.updateOrderStatus(
    req.params.id,
    status
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      order,
      "Order status updated successfully."
    )
  );
});