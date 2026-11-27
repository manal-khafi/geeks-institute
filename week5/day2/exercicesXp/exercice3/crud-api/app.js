const express = require("express");
const { fetchPosts } = require("./data/dataService");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Posts successfully retrieved from JSONPlaceholder and sent as response.");
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(502).json({
      message: "Failed to retrieve posts from external API",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`CRUD API server is running on http://localhost:${PORT}`);
});