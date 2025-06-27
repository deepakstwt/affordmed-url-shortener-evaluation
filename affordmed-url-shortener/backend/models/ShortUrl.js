const mongoose = require("mongoose");

const ClickSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  referrer: {
    type: String,
    default: "Direct",
  },
  location: {
    type: String,
    default: "Unknown",
  },
});

const ShortUrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortcode: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiryAt: {
    type: Date,
    required: true,
  },
  clicks: [ClickSchema],
});

module.exports = mongoose.model("ShortUrl", ShortUrlSchema);
