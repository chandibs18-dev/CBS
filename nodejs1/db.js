const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://chandibs18_db_user:P3LaSslBhIkzBI7Q@cluster0.ph0qhw1.mongodb.net/db1"
    );
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error);
    process.exit(1);
  }
};

module.exports = connectDB;
