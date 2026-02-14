// server.js
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const authRoutes = require("./auth");

const app = express();
const PORT = 5000;

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "my_access_secret";

// =====================
// Middleware
// =====================
app.use(express.json());
app.use(cookieParser());

// =====================
// JWT Verify Middleware
// =====================
function verifyJWT(req, res, next) {
  const token = req.cookies?.accessToken;

  if (!token) {
    return res.status(401).json({ message: "Access token missing" });
  }

  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.user = decoded;   // attach user data
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired access token" });
  }
}

// =====================
// Routes
// =====================
app.use("/auth", authRoutes);

// Protected route using middleware
app.get("/protected", verifyJWT, (req, res) => {
  res.json({
    message: `Hello ${req.user.username}, you accessed protected route!`,
    user: req.user
  });
});

// =====================
// Start server
// =====================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
