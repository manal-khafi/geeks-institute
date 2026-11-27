const express = require("express");
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
} = require("../models/postModel");

const router = express.Router();

function parseValidId(rawId) {
  const id = Number(rawId);
  return Number.isInteger(id) && id > 0 ? id : null;
}

// GET /posts
router.get("/", (req, res, next) => {
  try {
    const allPosts = getAllPosts();
    res.status(200).json(allPosts);
  } catch (err) {
    next(err);
  }
});

// GET /posts/:id
router.get("/:id", (req, res, next) => {
  try {
    const id = parseValidId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "Post ID must be a positive integer" });
    }

    const post = getPostById(id);
    if (!post) {
      return res.status(404).json({ message: `Blog post with ID ${id} not found` });
    }

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
});

// POST /posts
router.post("/", (req, res, next) => {
  try {
    const { title, content } = req.body;

    if (typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({ message: "Title is required and must be a non-empty string" });
    }

    if (typeof content !== "string" || content.trim() === "") {
      return res.status(400).json({ message: "Content is required and must be a non-empty string" });
    }

    const created = createPost({ title, content });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

// PUT /posts/:id
router.put("/:id", (req, res, next) => {
  try {
    const id = parseValidId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "Post ID must be a positive integer" });
    }

    const existing = getPostById(id);
    if (!existing) {
      return res.status(404).json({ message: `Blog post with ID ${id} not found` });
    }

    const { title, content } = req.body;

    if (title === undefined && content === undefined) {
      return res.status(400).json({ message: "Provide at least title or content to update" });
    }

    if (title !== undefined && (typeof title !== "string" || title.trim() === "")) {
      return res.status(400).json({ message: "Title must be a non-empty string" });
    }

    if (content !== undefined && (typeof content !== "string" || content.trim() === "")) {
      return res.status(400).json({ message: "Content must be a non-empty string" });
    }

    const updated = updatePostById(id, { title, content });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE /posts/:id
router.delete("/:id", (req, res, next) => {
  try {
    const id = parseValidId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "Post ID must be a positive integer" });
    }

    const deleted = deletePostById(id);
    if (!deleted) {
      return res.status(404).json({ message: `Blog post with ID ${id} not found` });
    }

    res.status(200).json({
      message: "Blog post deleted successfully",
      post: deleted,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;