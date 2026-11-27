const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

let todos = [
  { id: 1, title: "Learn Express routing", completed: true },
  { id: 2, title: "Build Todo CRUD endpoints", completed: false },
];
let nextId = 3;

function parseTodoId(rawId) {
  const id = Number(rawId);
  return Number.isInteger(id) && id > 0 ? id : null;
}

app.post("/api/todos", (req, res) => {
  const { title, completed } = req.body;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ message: "A non-empty title is required" });
  }

  const newTodo = {
    id: nextId++,
    title: title.trim(),
    completed: typeof completed === "boolean" ? completed : false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/api/todos", (req, res) => {
  res.status(200).json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const id = parseTodoId(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid todo ID" });
  }

  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ message: `Todo with id ${id} not found` });
  }

  res.status(200).json(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const id = parseTodoId(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid todo ID" });
  }

  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ message: `Todo with id ${id} not found` });
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

app.delete("/api/todos/:id", (req, res) => {
  const id = parseTodoId(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid todo ID" });
  }

  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ message: `Todo with id ${id} not found` });
  }

  const [deleted] = todos.splice(index, 1);
  res.status(200).json({ message: "Todo deleted", todo: deleted });
});

app.listen(PORT, () => {
  console.log(`Todo API server running on http://localhost:${PORT}`);
});