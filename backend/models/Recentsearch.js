const mongoose = require("mongoose");

const RecentSearchSchema = new mongoose.Schema({
    city: { type: String, required: true },
    searchedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("RecentSearch", RecentSearchSchema);
