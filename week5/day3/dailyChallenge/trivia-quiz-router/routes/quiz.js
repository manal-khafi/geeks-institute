const express = require("express");
const {
  triviaQuestions,
  quizState,
  resetQuiz,
  getCurrentQuestion,
  submitAnswer,
  getScoreSummary,
} = require("../models/triviaModel");

const router = express.Router();

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderQuizPage({ currentQuestion, feedback, completed }) {
  const feedbackHtml = feedback
    ? `
      <div class="feedback ${feedback.isCorrect ? "correct" : "wrong"}">
        <strong>${escapeHtml(feedback.message)}</strong>
      </div>
    `
    : "";

  const bodyContent = completed
    ? `
      <div class="done-box">
        <h2>Quiz Completed!</h2>
        <p>You answered all ${triviaQuestions.length} questions.</p>
        <div class="actions">
          <a class="btn" href="/quiz/score">View Final Score</a>
          <a class="btn secondary" href="/quiz?restart=1">Play Again</a>
        </div>
      </div>
    `
    : `
      <div class="meta">
        <span>Question ${currentQuestion.index + 1} of ${currentQuestion.total}</span>
        <span>Score: ${quizState.score}</span>
      </div>
      <h2 class="question">${escapeHtml(currentQuestion.question)}</h2>
      <form action="/quiz" method="POST" class="quiz-form">
        <input
          type="text"
          name="answer"
          placeholder="Type your answer..."
          autocomplete="off"
          autofocus
          required
        />
        <button type="submit">Submit Answer</button>
      </form>
    `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Trivia Quiz Game</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0f172a;
      color: #f8fafc;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 1.5rem;
    }
    .card {
      width: 100%;
      max-width: 540px;
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 14px;
      padding: 2rem;
    }
    h1 { font-size: 1.5rem; margin-bottom: 1rem; }
    .meta {
      display: flex;
      justify-content: space-between;
      color: #94a3b8;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .question { font-size: 1.25rem; line-height: 1.45; margin-bottom: 1.25rem; }
    .quiz-form { display: flex; flex-direction: column; gap: 0.85rem; }
    input[type="text"] {
      padding: 0.75rem 0.9rem;
      border-radius: 8px;
      border: 1px solid #475569;
      background: #0f172a;
      color: #f8fafc;
      font-size: 1rem;
    }
    button, a.btn {
      display: inline-block;
      text-align: center;
      text-decoration: none;
      background: #0284c7;
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 0.75rem 1.1rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    }
    button:hover, a.btn:hover { background: #0369a1; }
    a.btn.secondary { background: #334155; }
    a.btn.secondary:hover { background: #475569; }
    .feedback {
      margin-top: 1.15rem;
      padding: 0.85rem 1rem;
      border-radius: 8px;
      font-size: 0.95rem;
    }
    .feedback.correct {
      background: rgba(22, 163, 74, 0.2);
      border: 1px solid #22c55e;
      color: #bbf7d0;
    }
    .feedback.wrong {
      background: rgba(220, 38, 38, 0.2);
      border: 1px solid #ef4444;
      color: #fecaca;
    }
    .done-box h2 { margin-bottom: 0.5rem; }
    .done-box p { color: #cbd5e1; margin-bottom: 1.25rem; }
    .actions { display: flex; gap: 0.75rem; }
  </style>
</head>
<body>
  <main class="card">
    <h1>Express Trivia Quiz</h1>
    ${bodyContent}
    ${feedbackHtml}
  </main>
</body>
</html>`;
}

function renderScorePage(summary) {
  const rowsHtml = summary.history
    .map(
      (item, idx) => `
      <li class="history-item ${item.isCorrect ? "ok" : "bad"}">
        <div class="q"><strong>Q${idx + 1}:</strong> ${escapeHtml(item.question)}</div>
        <div>Your answer: <span>${escapeHtml(item.userAnswer)}</span> | Correct: <strong>${escapeHtml(item.correctAnswer)}</strong></div>
      </li>
    `
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Final Trivia Score</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0f172a;
      color: #f8fafc;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 1.5rem;
    }
    .card {
      width: 100%;
      max-width: 580px;
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 14px;
      padding: 2rem;
    }
    h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .score-big { font-size: 2rem; font-weight: 700; color: #38bdf8; margin: 0.75rem 0 1.25rem; }
    .history { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; }
    .history-item {
      padding: 0.85rem 1rem;
      border-radius: 8px;
      background: #0f172a;
      border-left: 4px solid #64748b;
      font-size: 0.92rem;
    }
    .history-item.ok { border-left-color: #22c55e; }
    .history-item.bad { border-left-color: #ef4444; }
    .history-item .q { margin-bottom: 0.3rem; }
    a.btn {
      display: inline-block;
      text-decoration: none;
      background: #0284c7;
      color: #fff;
      border-radius: 8px;
      padding: 0.75rem 1.15rem;
      font-weight: 600;
    }
    a.btn:hover { background: #0369a1; }
  </style>
</head>
<body>
  <main class="card">
    <h1>Final Score</h1>
    <div class="score-big">${summary.score} / ${summary.total}</div>
    <ul class="history">${rowsHtml || "<li>No answers submitted yet.</li>"}</ul>
    <a class="btn" href="/quiz?restart=1">Start New Quiz</a>
  </main>
</body>
</html>`;
}

// GET /quiz - Start or continue the quiz and display the current question
router.get("/", (req, res) => {
  if (req.query.restart === "1" || quizState.completed) {
    resetQuiz();
  }

  const currentQuestion = getCurrentQuestion();
  const completed = !currentQuestion;

  if (req.accepts("html")) {
    return res.status(200).send(
      renderQuizPage({
        currentQuestion,
        feedback: quizState.feedback,
        completed,
      })
    );
  }

  return res.status(200).json({
    completed,
    currentQuestion,
    score: quizState.score,
    feedback: quizState.feedback,
  });
});

// POST /quiz - Submit answer to current question and advance to next
router.post("/", (req, res) => {
  const { answer } = req.body;

  if (typeof answer !== "string" || answer.trim() === "") {
    if (req.accepts("html") && !req.is("application/json")) {
      const currentQuestion = getCurrentQuestion();
      return res.status(400).send(
        renderQuizPage({
          currentQuestion,
          completed: !currentQuestion,
          feedback: {
            isCorrect: false,
            message: "Please enter an answer before submitting.",
          },
        })
      );
    }
    return res.status(400).json({ message: "Answer is required" });
  }

  const result = submitAnswer(answer);
  const nextQuestion = getCurrentQuestion();

  if (req.accepts("html") && !req.is("application/json")) {
    return res.status(200).send(
      renderQuizPage({
        currentQuestion: nextQuestion,
        feedback: result.feedback,
        completed: result.completed,
      })
    );
  }

  return res.status(200).json({
    feedback: result.feedback,
    completed: result.completed,
    nextQuestion,
    score: quizState.score,
  });
});

// GET /quiz/score - Display final score summary
router.get("/score", (req, res) => {
  const summary = getScoreSummary();

  if (req.accepts("html")) {
    return res.status(200).send(renderScorePage(summary));
  }

  return res.status(200).json(summary);
});

module.exports = router;