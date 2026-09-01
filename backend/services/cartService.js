const Cart = require("../models/Cart");
const Food = require("../models/Food");
const ApiError = require("../utils/ApiError");

class CartService {
  // Get User Cart
  async getCart(userId) {
    let cart = await Cart.findOne({ user: userId }).populate({
      path: "items.food",
      populate: {
        path: "category",
        select: "name",
      },
    });

    if (!cart) {
      cart = await Cart.create({
        user: userId,
        items: [],
      });
    }

    return cart;
  }

  // Add Item To Cart
  async addToCart(userId, foodId, quantity) {
    const food = await Food.findById(foodId);

    if (!food) {
      throw new ApiError(404, "Food not found.");
    }

    if (!food.isAvailable) {
      throw new ApiError(400, "Food is currently unavailable.");
    }

    if (food.stock < quantity) {
      throw new ApiError(400, "Insufficient stock available.");
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = await Cart.create({
        user: userId,
        items: [],
      });
    }

    const existingItem = cart.items.find(
      (item) => item.food.toString() === foodId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.price = food.price;
    } else {
      cart.items.push({
        food: food._id,
        quantity,
        price: food.price,
      });
    }

    await cart.save();

    return await this.getCart(userId);
  }

  // Update Cart Item Quantity
  async updateQuantity(userId, foodId, quantity) {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      throw new ApiError(404, "Cart not found.");
    }

    const item = cart.items.find(
      (item) => item.food.toString() === foodId
    );

    if (!item) {
      throw new ApiError(404, "Food item not found in cart.");
    }

    const food = await Food.findById(foodId);

    if (!food) {
      throw new ApiError(404, "Food not found.");
    }

    if (food.stock < quantity) {
      throw new ApiError(400, "Insufficient stock available.");
    }

    item.quantity = quantity;
    item.price = food.price;

    await cart.save();

    return await this.getCart(userId);
  }

  // Remove Item
  async removeItem(userId, foodId) {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      throw new ApiError(404, "Cart not found.");
    }

    cart.items = cart.items.filter(
      (item) => item.food.toString() !== foodId
    );

    await cart.save();

    return await this.getCart(userId);
  }

  // Clear Cart
  async clearCart(userId) {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      throw new ApiError(404, "Cart not found.");
    }

    cart.items = [];

    await cart.save();

    return {
      message: "Cart cleared successfully.",
    };
  }
}

module.exports = new CartService();