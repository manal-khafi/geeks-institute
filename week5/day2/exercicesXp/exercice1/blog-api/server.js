const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let posts = [
  { id: 1, title: "Getting Started with Node.js", content: "Node.js runs JavaScript outside the browser." },
  { id: 2, title: "Building REST APIs with Express", content: "Express makes routing and middleware straightforward." },
];
let nextId = 3;

function parseId(rawId) {
  const id = Number(rawId);
  return Number.isInteger(id) && id > 0 ? id : null;
}

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/posts/:id", (req, res, next) => {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = posts.find((p) => p.id === id);
    if (!post) {
      return res.status(404).json({ message: `Post with id ${id} not found` });
    }

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
});

app.post("/posts", (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (typeof title !== "string" || title.trim() === "" || typeof content !== "string" || content.trim() === "") {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newPost = {
      id: nextId++,
      title: title.trim(),
      content: content.trim(),
    };

    posts.push(newPost);
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
});

app.put("/posts/:id", (req, res, next) => {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = posts.find((p) => p.id === id);
    if (!post) {
      return res.status(404).json({ message: `Post with id ${id} not found` });
    }

    const { title, content } = req.body;
    if (title !== undefined) {
      if (typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({ message: "Title must be a non-empty string" });
      }
      post.title = title.trim();
    }

    if (content !== undefined) {
      if (typeof content !== "string" || content.trim() === "") {
        return res.status(400).json({ message: "Content must be a non-empty string" });
      }
      post.content = content.trim();
    }

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
});

app.delete("/posts/:id", (req, res, next) => {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) {
      return res.status(404).json({ message: `Post with id ${id} not found` });
    }

    const [deleted] = posts.splice(index, 1);
    res.status(200).json({ message: "Post deleted", post: deleted });
  } catch (err) {
    next(err);
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error("Server error:", err.message);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Blog API server listening on http://localhost:${PORT}`);
});