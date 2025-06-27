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

app.use("/shorturls", urlRoutes);
app.use("/", redirectRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
