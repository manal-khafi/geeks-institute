const express = require("express");
const path = require("path");
const questions = require("./questions");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const leaderboard = [
  { name: "Youssef", score: 4, total: 5 },
  { name: "Salma", score: 3, total: 5 },
];

app.get("/api/questions", (req, res) => {
  const safeQuestions = questions.map(({ id, question, options }) => ({
    id,
    question,
    options,
  }));
  res.json({ total: safeQuestions.length, questions: safeQuestions });
});

app.post("/api/answer", (req, res) => {
  const { questionId, selectedIndex } = req.body;
  const question = questions.find((q) => q.id === Number(questionId));

  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }

  if (typeof selectedIndex !== "number" || selectedIndex < 0 || selectedIndex >= question.options.length) {
    return res.status(400).json({ message: "Invalid answer selection" });
  }

  const isCorrect = selectedIndex === question.correctIndex;

  res.json({
    correct: isCorrect,
    correctIndex: question.correctIndex,
    correctOption: question.options[question.correctIndex],
    explanation: question.explanation,
  });
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboard);
});

app.post("/api/leaderboard", (req, res) => {
  const { name, score, total } = req.body;

  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ message: "Player name is required" });
  }

  if (typeof score !== "number" || typeof total !== "number" || total <= 0) {
    return res.status(400).json({ message: "Valid score and total are required" });
  }

  leaderboard.push({
    name: name.trim().slice(0, 24),
    score,
    total,
  });

  leaderboard.sort((a, b) => b.score - a.score);
  res.status(201).json(leaderboard.slice(0, 10));
});

app.listen(PORT, () => {
  console.log(`Quiz Game running at http://localhost:${PORT}`);
});