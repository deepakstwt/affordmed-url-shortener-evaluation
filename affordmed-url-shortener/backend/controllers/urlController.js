const { nanoid } = require("nanoid");

// In-memory storage for now (instead of MongoDB)
const urls = {};

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
    if (urls[finalCode]) {
      return res.status(409).json({ error: "Shortcode already in use" });
    }

    const now = new Date();
    const expiry = new Date(now.getTime() + validity * 60000); // Add X mins

    // Save to memory
    urls[finalCode] = {
      originalUrl: url,
      shortcode: finalCode,
      createdAt: now,
      expiryAt: expiry,
      clicks: []
    };

    return res.status(201).json({
      shortLink: `http://localhost:8080/${finalCode}`,
      expiry: expiry.toISOString(),
    });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Server Error" });
  }
};

// GET /shorturls/:shortcode - Stats Endpoint  
exports.getStats = async (req, res) => {
  try {
    const { shortcode } = req.params;

    const urlData = urls[shortcode];

    if (!urlData) {
      return res.status(404).json({ error: "Shortcode not found" });
    }

    return res.status(200).json({
      originalUrl: urlData.originalUrl,
      shortcode: urlData.shortcode,
      createdAt: urlData.createdAt,
      expiryAt: urlData.expiryAt,
      totalClicks: urlData.clicks.length,
      clickDetails: urlData.clicks.map((click) => ({
        timestamp: click.timestamp,
        referrer: click.referrer,
        location: click.location,
      })),
    });
  } catch (err) {
    console.error("Stats Error:", err);
    return res.status(500).json({ error: "Server Error" });
  }
};

// GET /:shortcode - Redirect to original URL
exports.redirectUrl = async (req, res) => {
  try {
    const { shortcode } = req.params;
    const urlData = urls[shortcode];
    
    if (!urlData) {
      return res.status(404).json({ error: "Shortcode not found" });
    }
    
    // Check if expired
    if (new Date() > new Date(urlData.expiryAt)) {
      return res.status(410).json({ error: "Short URL has expired" });
    }
    
    // Record click
    urlData.clicks.push({
      timestamp: new Date(),
      referrer: req.get('Referrer') || 'Direct',
      location: 'Unknown' // You can add IP geolocation here
    });
    
    // Redirect to original URL
    return res.redirect(301, urlData.originalUrl);
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Server Error" });
  }
};
