const ShortUrl = require("../models/ShortUrl");
const { nanoid } = require("nanoid");

// POST /shorturls
exports.createShortUrl = async (req, res) => {
  try {
    const { url, validity = 30, shortcode } = req.body;

    // Basic validation
    if (!url || typeof url !== "string") {
      return res.status(400).json({ error: "Invalid or missing URL" });
    }

    // Custom or auto shortcode
    let finalCode = shortcode || nanoid(6);

    // Check uniqueness
    const existing = await ShortUrl.findOne({ shortcode: finalCode });
    if (existing) {
      return res.status(409).json({ error: "Shortcode already in use" });
    }

    const now = new Date();
    const expiry = new Date(now.getTime() + validity * 60000); // Add X mins

    // Save to DB
    const newUrl = await ShortUrl.create({
      originalUrl: url,
      shortcode: finalCode,
      createdAt: now,
      expiryAt: expiry,
    });

    return res.status(201).json({
      shortLink: `http://localhost:3001/${finalCode}`,
      expiry: expiry.toISOString(),
    });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Server Error" });
  }
}; 