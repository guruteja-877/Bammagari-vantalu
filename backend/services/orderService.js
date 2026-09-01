const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Food = require("../models/Food");
const ApiError = require("../utils/ApiError");

class OrderService {
  // Create Order
  async createOrder(userId, data) {
    const {
      shippingAddress,
      phone,
      paymentMethod,
      deliveryFee = 0,
      tax = 0,
    } = data;

    const cart = await Cart.findOne({ user: userId }).populate("items.food");

    if (!cart || cart.items.length === 0) {
      throw new ApiError(400, "Your cart is empty.");
    }

    const orderItems = [];

    let subtotal = 0;

    // Validate stock & availability
    for (const item of cart.items) {
      const food = await Food.findById(item.food._id);

      if (!food) {
        throw new ApiError(
          404,
          `${item.food.name} no longer exists.`
        );
      }

      if (!food.isAvailable) {
        throw new ApiError(
          400,
          `${food.name} is currently unavailable.`
        );
      }

      if (food.stock < item.quantity) {
        throw new ApiError(
          400,
          `Only ${food.stock} ${food.name} available in stock.`
        );
      }

      food.stock -= item.quantity;

      await food.save();

      subtotal += item.quantity * item.price;

      orderItems.push({
        food: food._id,
        name: food.name,
        image: food.image,
        quantity: item.quantity,
        price: item.price,
      });
    }

    const totalAmount =
      subtotal + Number(deliveryFee) + Number(tax);

    const order = await Order.create({
      user: userId,
      items: orderItems,
      shippingAddress,
      phone,
      paymentMethod,
      subtotal,
      deliveryFee,
      tax,
      totalAmount,
    });

    // Empty cart
    cart.items = [];

    await cart.save();

    return await Order.findById(order._id)
      .populate("user", "name email")
      .populate("items.food");
  }

  // Get Logged-in User Orders
  async getUserOrders(userId) {
    return await Order.find({
      user: userId,
    })
      .sort({ createdAt: -1 })
      .populate("items.food");
  }

  // Get Order By ID
  async getOrderById(orderId) {
    const order = await Order.findById(orderId)
      .populate("user", "name email phone")
      .populate("items.food");

    if (!order) {
      throw new ApiError(404, "Order not found.");
    }

    return order;
  }

  // Get All Orders (Admin)
  async getAllOrders() {
    return await Order.find()
      .sort({ createdAt: -1 })
      .populate("user", "name email");
  }

  // Update Order Status
  async updateOrderStatus(orderId, status) {
    const order = await Order.findById(orderId);

    if (!order) {
      throw new ApiError(404, "Order not found.");
    }

    order.orderStatus = status;

    if (status === "Delivered") {
      order.paymentStatus = "Paid";
      order.deliveredAt = new Date();
    }

    await order.save();

    return order;
  }
}

module.exports = new OrderService();