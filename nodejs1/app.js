const express = require("express");
const connectDB = require("./db");
const postRouter = require("./post");

const app = express();

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/post", postRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
