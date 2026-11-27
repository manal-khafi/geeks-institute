const express = require("express");

const router = express.Router();

const todos = [];
let nextId = 1;

function parseId(rawId) {
  const id = Number(rawId);
  return Number.isInteger(id) && id > 0 ? id : null;
}

router.get("/", (req, res) => {
  res.status(200).json(todos);
});

router.post("/", (req, res) => {
  const { title, completed } = req.body;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTodo = {
    id: nextId++,
    title: title.trim(),
    completed: typeof completed === "boolean" ? completed : false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid todo ID" });
  }

  const todo = todos.find((item) => item.id === id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const { title, completed } = req.body;
  if (title !== undefined) {
    if (typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({ message: "Title must be a non-empty string" });
    }
    todo.title = title.trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "Completed must be a boolean" });
    }
    todo.completed = completed;
  }

  res.status(200).json(todo);
});

router.delete("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid todo ID" });
  }

  const index = todos.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const [deleted] = todos.splice(index, 1);
  res.status(200).json({ message: "Todo deleted", todo: deleted });
});

module.exports = router;