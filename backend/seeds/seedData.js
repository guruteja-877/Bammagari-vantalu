require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");

const User = require("./models/User");
const Category = require("./models/Category");
const Food = require("./models/Food");

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log("Clearing existing data...");

    await Food.deleteMany();
    await Category.deleteMany();
    await User.deleteMany({ role: "admin" });

    console.log("Creating Admin...");

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    const admin = await User.create({
      name: "Administrator",
      email: "admin@bammagari.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin Created");

    console.log("Creating Categories...");

    const categories = await Category.insertMany([
      {
        name: "Biryani",
        description: "Traditional Dum Biryanis",
        image: "/uploads/categories/biryani.jpg",
      },
      {
        name: "Meals",
        description: "South Indian Meals",
        image: "/uploads/categories/meals.jpg",
      },
      {
        name: "Curries",
        description: "Authentic Andhra Curries",
        image: "/uploads/categories/curries.jpg",
      },
      {
        name: "Tiffins",
        description: "Breakfast Specials",
        image: "/uploads/categories/tiffins.jpg",
      },
      {
        name: "Desserts",
        description: "Traditional Telugu Sweets",
        image: "/uploads/categories/desserts.jpg",
      },
    ]);

    console.log("Categories Created");

    console.log("Creating Foods...");

    await Food.insertMany([
      {
        name: "Chicken Dum Biryani",
        description:
          "Authentic Hyderabad Chicken Dum Biryani prepared with premium basmati rice.",
        price: 299,
        category: categories[0]._id,
        region: "Hyderabad",
        images: ["/uploads/foods/chicken-biryani.jpg"],
        stock: 100,
        isVeg: false,
        isFeatured: true,
        isBestSeller: true,
        isAvailable: true,
      },
      {
        name: "Veg Meals",
        description:
          "Traditional Andhra Veg Meals served with multiple curries and rice.",
        price: 199,
        category: categories[1]._id,
        region: "Andhra",
        images: ["/uploads/foods/veg-meals.jpg"],
        stock: 100,
        isVeg: true,
        isFeatured: true,
        isBestSeller: false,
        isAvailable: true,
      },
      {
        name: "Gongura Chicken",
        description:
          "Spicy Andhra-style Gongura Chicken with authentic flavors.",
        price: 269,
        category: categories[2]._id,
        region: "Rayalaseema",
        images: ["/uploads/foods/gongura-chicken.jpg"],
        stock: 75,
        isVeg: false,
        isFeatured: false,
        isBestSeller: true,
        isAvailable: true,
      },
      {
        name: "Idli",
        description:
          "Soft steamed idlis served with chutney and sambar.",
        price: 80,
        category: categories[3]._id,
        region: "Telangana",
        images: ["/uploads/foods/idli.jpg"],
        stock: 200,
        isVeg: true,
        isFeatured: false,
        isBestSeller: false,
        isAvailable: true,
      },
      {
        name: "Pootharekulu",
        description:
          "Famous Andhra sweet made with rice paper and jaggery.",
        price: 150,
        category: categories[4]._id,
        region: "Godavari",
        images: ["/uploads/foods/pootharekulu.jpg"],
        stock: 60,
        isVeg: true,
        isFeatured: true,
        isBestSeller: true,
        isAvailable: true,
      },
    ]);

    console.log("Foods Created");

    console.log("-----------------------------------");
    console.log("Database Seeded Successfully");
    console.log("-----------------------------------");

    console.log("Admin Login");
    console.log("Email: admin@bammagari.com");
    console.log("Password: Admin@123");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();