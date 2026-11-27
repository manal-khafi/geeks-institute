const express = require("express");

const router = express.Router();

const books = [];
let nextId = 1;

function parseId(rawId) {
  const id = Number(rawId);
  return Number.isInteger(id) && id > 0 ? id : null;
}

router.get("/", (req, res) => {
  res.status(200).json(books);
});

router.post("/", (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (typeof title !== "string" || title.trim() === "" || typeof author !== "string" || author.trim() === "") {
    return res.status(400).json({ message: "Title and author are required" });
  }

  const newBook = {
    id: nextId++,
    title: title.trim(),
    author: author.trim(),
    publishedYear: publishedYear !== undefined ? Number(publishedYear) : null,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

router.put("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid book ID" });
  }

  const book = books.find((item) => item.id === id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const { title, author, publishedYear } = req.body;

  if (title !== undefined) {
    if (typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({ message: "Title must be a non-empty string" });
    }
    book.title = title.trim();
  }

  if (author !== undefined) {
    if (typeof author !== "string" || author.trim() === "") {
      return res.status(400).json({ message: "Author must be a non-empty string" });
    }
    book.author = author.trim();
  }

  if (publishedYear !== undefined) {
    book.publishedYear = Number(publishedYear);
  }

  res.status(200).json(book);
});

router.delete("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid book ID" });
  }

  const index = books.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const [deleted] = books.splice(index, 1);
  res.status(200).json({ message: "Book deleted", book: deleted });
});

module.exports = router;