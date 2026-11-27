const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

app.use(express.json());

app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(502).json({
      message: "Failed to fetch posts from external API",
      error: error.message,
    });
  }
});

app.get("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    const status = error.response ? error.response.status : 500;
    res.status(status).json({
      message: `Failed to fetch post with id ${id}`,
      error: error.message,
    });
  }
});

app.post("/api/posts", async (req, res) => {
  const { title, body, userId } = req.body;

  if (!title || !body) {
    return res.status(400).json({ message: "title and body are required" });
  }

  try {
    const response = await axios.post(BASE_URL, {
      title,
      body,
      userId: userId || 1,
    });
    res.status(201).json(response.data);
  } catch (error) {
    res.status(502).json({
      message: "Failed to create post on external API",
      error: error.message,
    });
  }
});

app.put("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { title, body, userId } = req.body;

  try {
    const response = await axios.put(`${BASE_URL}/${id}`, {
      id: Number(id),
      title,
      body,
      userId: userId || 1,
    });
    res.status(200).json(response.data);
  } catch (error) {
    const status = error.response ? error.response.status : 500;
    res.status(status).json({
      message: `Failed to update post with id ${id}`,
      error: error.message,
    });
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    res.status(200).json({ message: `Post ${id} deleted successfully` });
  } catch (error) {
    const status = error.response ? error.response.status : 500;
    res.status(status).json({
      message: `Failed to delete post with id ${id}`,
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`CRUD API server running on http://localhost:${PORT}`);
});