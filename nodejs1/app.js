const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./db");

const postRouter = require("./post");
const authRouter = require("./auth");
const verifyJWT = require("./authMiddleware"); // IMPORT MIDDLEWARE

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/auth", authRouter);
app.use("/api/post", postRouter);


app.get("/protected", verifyJWT, (req, res) => {
  res.json({
    message: `Welcome ${req.user.username}`,
    user: req.user
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
