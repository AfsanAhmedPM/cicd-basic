const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hi, I'm Afsan! This is my portfolio backend." });
});

app.get("/projects", (req, res) => {
  res.json({
    projects: [
      { name: "Project 1", description: "My first project" },
      { name: "Project 2", description: "My second project" },
    ],
  });
});

app.listen(8000, () => {
  console.log("Backend running on port 8000");
});
