// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);

//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     console.log("Connecting to MongoDB...");
//     console.log("URI:", process.env.MONGO_URI);

//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       serverSelectionTimeoutMS: 10000,
//     });

//     console.log("MongoDB Connected:", conn.connection.host);
//   } catch (error) {
//     console.error("===== FULL ERROR =====");
//     console.error(error);
//     console.error("======================");
//     process.exit(1);
//   }
// };

// module.exports = connectDB;



const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(
      `✅ MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`
    );

    mongoose.connection.on("connected", () => {
      console.log("📦 MongoDB connection established.");
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB disconnected.");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB Error:", err.message);
    });
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;