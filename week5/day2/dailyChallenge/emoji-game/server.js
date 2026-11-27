const express = require("express");
const path = require("path");
const { createRound } = require("./emojis");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const activeRounds = new Map();
const leaderboard = [
  { name: "Youssef", score: 8 },
  { name: "Salma", score: 6 },
  { name: "Karim", score: 4 },
];

app.get("/api/round", (req, res) => {
  const round = createRound(3);
  activeRounds.set(round.roundId, {
    correctName: round.correctName,
    createdAt: Date.now(),
  });

  res.status(200).json({
    roundId: round.roundId,
    emoji: round.emoji,
    options: round.options,
    hint: round.hint,
  });
});

app.post("/api/guess", (req, res) => {
  const { roundId, guess } = req.body;

  if (!roundId || typeof guess !== "string" || guess.trim() === "") {
    return res.status(400).json({ message: "roundId and guess are required" });
  }

  const round = activeRounds.get(roundId);
  if (!round) {
    return res.status(404).json({ message: "Round not found or already submitted" });
  }

  activeRounds.delete(roundId);
  const isCorrect = guess.trim().toLowerCase() === round.correctName.toLowerCase();

  res.status(200).json({
    correct: isCorrect,
    correctName: round.correctName,
    message: isCorrect
      ? `Correct! That emoji is ${round.correctName}.`
      : `Wrong guess! It was ${round.correctName}.`,
  });
});

app.get("/api/leaderboard", (req, res) => {
  res.status(200).json(leaderboard.slice(0, 10));
});

app.post("/api/leaderboard", (req, res) => {
  const { name, score } = req.body;

  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ message: "Player name is required" });
  }

  if (typeof score !== "number" || Number.isNaN(score) || score < 0) {
    return res.status(400).json({ message: "Score must be a non-negative number" });
  }

  leaderboard.push({
    name: name.trim().slice(0, 20),
    score: Math.floor(score),
  });

  leaderboard.sort((a, b) => b.score - a.score);
  res.status(201).json(leaderboard.slice(0, 10));
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Emoji Guessing Game running at http://localhost:${PORT}`);
});