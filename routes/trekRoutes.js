const express = require("express");
const router = express.Router();
const Trek = require("../models/Trek"); // Import Trek model

// Route: GET /api/treks - Fetch all treks
router.get("/", async (req, res) => {
  try {
    const treks = await Trek.find();
    res.json(treks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Route: GET /api/treks/:id - Fetch a specific trek by ID
router.get("/:id", async (req, res) => {
  try {
    const trek = await Trek.findById(req.params.id);
    if (!trek) {
      return res.status(404).json({ msg: "Trek not found" });
    }
    res.json(trek);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Trek not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
