const express = require("express");


const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "CI/CD Demo Application",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
  });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; // this test the server instance for testing purposes