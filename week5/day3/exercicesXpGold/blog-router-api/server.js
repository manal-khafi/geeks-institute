const express = require("express");
const postsRouter = require("./routes/posts");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/posts", postsRouter);

// Handle malformed JSON bodies
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ message: "Invalid JSON payload" });
  }
  next(err);
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Blog Router API running at http://localhost:${PORT}`);
});