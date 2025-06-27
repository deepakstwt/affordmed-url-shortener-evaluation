const express = require("express");
const router = express.Router();
const { createShortUrl, getStats } = require("../controllers/urlController");

// POST /shorturls - Create Short URL
router.post("/", createShortUrl);

// GET /shorturls/:shortcode - Get Stats
router.get("/:shortcode", getStats);

module.exports = router;
