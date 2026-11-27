const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008 },
  { id: 2, title: "You Don't Know JS Yet", author: "Kyle Simpson", publishedYear: 2020 },
  { id: 3, title: "Eloquent JavaScript", author: "Marijn Haverbeke", publishedYear: 2018 },
];
let nextBookId = 4;

app.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const bookId = Number(req.params.bookId);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});

app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || publishedYear === undefined) {
    return res.status(400).json({
      message: "title, author, and publishedYear are required",
    });
  }

  const newBook = {
    id: nextBookId++,
    title,
    author,
    publishedYear: Number(publishedYear),
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`Book API server is running on http://localhost:${PORT}`);
});