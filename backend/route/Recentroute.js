const express = require("express");
const router = express.Router();
const RecentSearch = require("../models/Recentsearch");

// POST /api/recent-searches
router.post("/", async (req, res) => {
  const { city } = req.body;

  try {
    const newSearch = new RecentSearch({ city });
    await newSearch.save();
    res.status(201).json({ message: "Search saved" });
  } catch (error) {
    console.error("Error saving search:", error);
    res.status(500).json({ error: "Server error" });
  }
});
// GET /api/weather
router.get("/", async (req, res) => {
  try {
    const searches = await RecentSearch.find().sort({ searchedAt: -1 }); // newest first
    res.json(searches);
  } catch (error) {
    console.error("Error fetching search history:", error);
    res.status(500).json({ error: "Server error" });
  }
});
// DELETE /api/weather/:id
router.delete("/:id", async (req, res) => {
  try {
    await RecentSearch.findByIdAndDelete(req.params.id);
    res.json({ message: "Search deleted" });
  } catch (err) {
    console.error("Error deleting search:", err);
    res.status(500).json({ error: "Server error" });
  }
});



module.exports = router;
