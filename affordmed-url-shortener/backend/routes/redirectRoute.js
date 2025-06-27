const express = require("express");
const router = express.Router();
const { redirectUrl } = require("../controllers/urlController");

// GET /:shortcode - Redirect to original URL
router.get("/:shortcode", redirectUrl);

module.exports = router;
