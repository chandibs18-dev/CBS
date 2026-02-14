const express = require("express");
const router = express.Router();
const Student = require("./models/student");
const Contact = require("./models/contact");

console.log("Post router loaded ");


// =============================
// Student Routes
// =============================

// GET /students - list all students
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (error) {
    console.error("GET /students error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /students/:id - get student by ID
router.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    console.error("GET /students/:id error:", error);

    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid student ID" });
    }

    res.status(500).json({ error: "Server error" });
  }
});

// POST /students - add new student
router.post("/students", async (req, res) => {
  try {
    const { name, age, course } = req.body;

    if (!name || !age || !course) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const student = await Student.create({ name, age, course });

    res.status(201).json({
      message: "Student added successfully",
      student
    });
  } catch (error) {
    console.error("POST /students error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// =============================
// Contact Routes
// =============================

// POST /contacts
router.post("/contacts", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contact = await Contact.create({ name, email, message });

    res.status(201).json({
      message: "Contact added successfully",
      contact
    });
  } catch (error) {
    console.error("POST /contacts error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
