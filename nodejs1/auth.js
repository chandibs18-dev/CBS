// auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "my_access_secret";
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "my_refresh_secret";

// Dummy users with plain passwords
const users = [
  { id: 1, username: "alice", password: "user123", role: "user" },
  { id: 2, username: "bob", password: "admin123", role: "admin" },
];

// In-memory storage for refresh tokens
let refreshTokens = [];

// ==========================
// LOGIN
// ==========================
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Create tokens
  const accessToken = jwt.sign(
    { userId: user.id, username: user.username, role: user.role },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "10s" } // short-lived
  );

  const refreshToken = jwt.sign(
    { userId: user.id, username: user.username, role: user.role },
    REFRESH_TOKEN_SECRET,
    { expiresIn: "24h" } // long-lived
  );

  refreshTokens.push(refreshToken);

  // Return tokens in JSON (optional) + cookies
  res
    .cookie("accessToken", accessToken, { httpOnly: true })
    .cookie("refreshToken", refreshToken, { httpOnly: true })
    .json({
      message: "Logged in successfully",
      accessToken,
      refreshToken
    });
});

// ==========================
// REFRESH TOKEN
// ==========================
router.post("/token", (req, res) => {
  const token = req.cookies?.refreshToken;
  if (!token) return res.status(401).json({ message: "Refresh token missing" });
  if (!refreshTokens.includes(token)) return res.status(403).json({ message: "Invalid refresh token" });

  try {
    const user = jwt.verify(token, REFRESH_TOKEN_SECRET);

    const accessToken = jwt.sign(
      { userId: user.userId, username: user.username, role: user.role },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "10s" }
    );

    res.cookie("accessToken", accessToken, { httpOnly: true }).json({ accessToken, message: "Access token refreshed" });
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired refresh token" });
  }
});

// ==========================
// LOGOUT
// ==========================
router.post("/logout", (req, res) => {
  const token = req.cookies?.refreshToken;
  refreshTokens = refreshTokens.filter(t => t !== token);

  // Clear cookies
  res
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json({ message: "Logged out successfully" });
});

module.exports = router;
