const Order = require("../models/Order");
const Cart = require("../models/Cart");

// Place Order
const placeOrder = async (req, res) => {
  try {
    // Find logged-in user's cart
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.food"
    );

    // Check if cart exists
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    // Calculate total amount
    let totalAmount = 0;

    cart.items.forEach((item) => {
      totalAmount += item.food.price * item.quantity;
    });

    // Create Order
    const order = await Order.create({
      user: req.user._id,
      items: cart.items,
      totalAmount,
    });

    // Clear Cart
    cart.items = [];
    await cart.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get Logged-in User Orders
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("items.food")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  placeOrder,
  getMyOrders
};