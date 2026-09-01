const bcrypt = require("bcryptjs");
const User = require("../models/User");
const ApiError = require("../utils/ApiError");

class UserService {
  // Get logged-in user profile
  async getProfile(userId) {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    return user;
  }

  // Update user profile
  async updateProfile(userId, data) {
    const { name, phone, profileImage } = data;

    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (profileImage !== undefined) user.profileImage = profileImage;

    await user.save();

    return await User.findById(userId).select("-password");
  }

  // Update address
  async updateAddress(userId, address) {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    user.address = {
      street: address.street || "",
      city: address.city || "",
      state: address.state || "",
      postalCode: address.postalCode || "",
    };

    await user.save();

    return user.address;
  }

  // Change password
  async changePassword(userId, currentPassword, newPassword) {
    const user = await User.findById(userId).select("+password");

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    const isMatch = await user.matchPassword(currentPassword);

    if (!isMatch) {
      throw new ApiError(400, "Current password is incorrect.");
    }

    user.password = newPassword;

    await user.save();

    return {
      message: "Password updated successfully.",
    };
  }

  // Get all users (Admin)
  async getAllUsers() {
    return await User.find().select("-password");
  }

  // Get user by ID
  async getUserById(id) {
    const user = await User.findById(id).select("-password");

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    return user;
  }

  // Activate / Deactivate user
  async toggleUserStatus(id) {
    const user = await User.findById(id);

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    user.isActive = !user.isActive;

    await user.save();

    return user;
  }

  // Delete user
  async deleteUser(id) {
    const user = await User.findById(id);

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    await user.deleteOne();

    return {
      message: "User deleted successfully.",
    };
  }
}

module.exports = new UserService();