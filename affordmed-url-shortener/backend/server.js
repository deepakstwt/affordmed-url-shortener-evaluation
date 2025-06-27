require('dotenv').config();
const express = require("express");
const cors = require("cors");
const urlRoutes = require("./routes/urlRoutes");
const redirectRoute = require("./routes/redirectRoute");
const logger = require("./middleware/logger");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));
app.use(express.json());
app.use(logger);

app.use("/shorturls", urlRoutes);
app.use("/", redirectRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${process.env.BASE_URL || `http://localhost:${PORT}`}`);
});
