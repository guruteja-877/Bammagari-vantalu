const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    region: {
      type: String,
      required: true,
    },

    isVeg: {
      type: Boolean,
      default: false,
    },

    rating: {
      type: Number,
      default: 5,
      min: 0,
      max: 5,
    },

    // NEW FIELD
    spice: {
      type: String,
      enum: ["mild", "medium", "spicy", "extra spicy"],
      default: "medium",
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);