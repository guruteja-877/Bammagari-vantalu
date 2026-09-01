const User = require("../models/User");
const ApiError = require("../utils/ApiError");
const generateToken = require("../utils/generateToken");

class AuthService {
  // Register User
  async register(data) {
    const { name, email, password, phone, role } = data;

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      throw new ApiError(409, "Email already registered.");
    }

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      phone,
      role: role || "user",
    });

    const token = generateToken(user._id);

    return {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        profileImage: user.profileImage,
      },
      token,
    };
  }

  // Login User
  async login(email, password) {
    const user = await User.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    if (!user) {
      throw new ApiError(401, "Invalid email or password.");
    }

    if (!user.isActive) {
      throw new ApiError(
        403,
        "Your account has been deactivated."
      );
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      throw new ApiError(401, "Invalid email or password.");
    }

    const token = generateToken(user._id);

    return {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        profileImage: user.profileImage,
      },
      token,
    };
  }

  // Get Logged-in User
  async getProfile(userId) {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    return user;
  }
}

module.exports = new AuthService();