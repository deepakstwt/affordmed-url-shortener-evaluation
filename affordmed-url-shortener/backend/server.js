const express = require("express");
const cors = require("cors");
const urlRoutes = require("./routes/urlRoutes");
const redirectRoute = require("./routes/redirectRoute");
const logger = require("./middleware/logger");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(logger);

// API routes
app.use("/shorturls", urlRoutes);

// Redirect route (must be last)
app.use("/", redirectRoute);

console.log("🚀 Server starting on port", PORT);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📡 Also available at http://127.0.0.1:${PORT}`);
  console.log(`🔗 Test endpoint: http://localhost:${PORT}/shorturls`);
});
