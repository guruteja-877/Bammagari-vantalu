const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    food: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
      required: [true, "Food is required"],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },

    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      required: [true, "Comment is required"],
      trim: true,
      minlength: 5,
      maxlength: 500,
    },

    isApproved: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// A user can review a food item only once
reviewSchema.index(
  {
    food: 1,
    user: 1,
  },
  {
    unique: true,
  }
);

// Update Food Rating
reviewSchema.statics.updateFoodRating = async function (foodId) {
  const stats = await this.aggregate([
    {
      $match: {
        food: new mongoose.Types.ObjectId(foodId),
      },
    },
    {
      $group: {
        _id: "$food",
        averageRating: {
          $avg: "$rating",
        },
        totalReviews: {
          $sum: 1,
        },
      },
    },
  ]);

  const Food = mongoose.model("Food");

  if (stats.length > 0) {
    await Food.findByIdAndUpdate(foodId, {
      rating: Number(stats[0].averageRating.toFixed(1)),
      totalReviews: stats[0].totalReviews,
    });
  } else {
    await Food.findByIdAndUpdate(foodId, {
      rating: 0,
      totalReviews: 0,
    });
  }
};

// Update rating after save
reviewSchema.post("save", async function () {
  await this.constructor.updateFoodRating(this.food);
});

// Update rating after delete
reviewSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await doc.constructor.updateFoodRating(doc.food);
  }
});

module.exports = mongoose.model("Review", reviewSchema);