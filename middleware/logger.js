const fs = require("fs");
const path = require("path");

const logger = (req, res, next) => {
  const logData = {
    method: req.method,
    url: req.originalUrl,
    timestamp: new Date().toISOString(),
    body: req.body,
  };

  const logPath = path.join(__dirname, "../logs.txt");
  fs.appendFileSync(logPath, JSON.stringify(logData) + "\n");

  next();
};

module.exports = logger; 