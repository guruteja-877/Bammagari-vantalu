const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Food name is required"],
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: 1000,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    image: {
      type: String,
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    region: {
      type: String,
      required: true,
      enum: [
        "Andhra",
        "Rayalaseema",
        "Telangana",
        "Hyderabad",
        "Coastal Andhra",
        "Godavari",
        "Nellore",
      ],
    },

    isVeg: {
      type: Boolean,
      default: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isBestSeller: {
      type: Boolean,
      default: false,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    prepTime: {
      type: Number,
      default: 20,
    },

    stock: {
      type: Number,
      default: 100,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for faster searching
foodSchema.index({ name: "text", description: "text" });

foodSchema.index({
  category: 1,
  region: 1,
});

module.exports = mongoose.model("Food", foodSchema);