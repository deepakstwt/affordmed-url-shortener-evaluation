// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const urlRoutes = require("./routes/urlRoutes");
const logger = require("./middleware/logger");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(logger); // ✅ Your Custom Logging Middleware
app.use("/shorturls", urlRoutes);

// Redirection route (commented out for now)
// app.use("/:shortcode", require("./routes/redirectRoute"));

console.log("🚀 Starting server...");
console.log("📝 PORT:", PORT);
console.log("🔗 MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📡 Test URL: http://localhost:${PORT}/shorturls`);
    });
  })
  .catch((err) => {
    console.error("❌ Mongo Error", err);
    console.log("🔄 Starting server anyway without MongoDB...");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT} (without DB)`);
      console.log(`📡 Test URL: http://localhost:${PORT}/shorturls`);
    });
  }); 