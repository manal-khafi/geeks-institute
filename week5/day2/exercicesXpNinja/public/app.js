const QUESTION_TIME_SECONDS = 20;

let questions = [];
let currentIndex = 0;
let score = 0;
let timeLeft = QUESTION_TIME_SECONDS;
let timerId = null;
let answered = false;

const progressEl = document.getElementById("progress");
const scoreBadgeEl = document.getElementById("score-badge");
const timerBadgeEl = document.getElementById("timer-badge");
const quizScreenEl = document.getElementById("quiz-screen");
const resultScreenEl = document.getElementById("result-screen");
const questionTextEl = document.getElementById("question-text");
const optionsFormEl = document.getElementById("options-form");
const submitBtnEl = document.getElementById("submit-btn");
const nextBtnEl = document.getElementById("next-btn");
const feedbackEl = document.getElementById("feedback");
const finalScoreEl = document.getElementById("final-score");
const finalMessageEl = document.getElementById("final-message");
const saveScoreFormEl = document.getElementById("save-score-form");
const playerNameInputEl = document.getElementById("player-name");
const leaderboardListEl = document.getElementById("leaderboard-list");
const restartBtnEl = document.getElementById("restart-btn");

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function startTimer() {
  stopTimer();
  timeLeft = QUESTION_TIME_SECONDS;
  timerBadgeEl.textContent = `Time: ${timeLeft}s`;

  timerId = setInterval(() => {
    timeLeft -= 1;
    timerBadgeEl.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      stopTimer();
      handleTimeExpired();
    }
  }, 1000);
}

async function handleTimeExpired() {
  if (answered) return;
  answered = true;
  submitBtnEl.disabled = true;
  disableOptions();

  const currentQ = questions[currentIndex];
  const res = await fetch("/api/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ questionId: currentQ.id, selectedIndex: 0 }),
  });
  const data = await res.json();

  showFeedback(false, `Time's up! Correct answer: "${data.correctOption}". ${data.explanation}`);
  nextBtnEl.textContent = currentIndex === questions.length - 1 ? "See Final Score" : "Next Question";
  nextBtnEl.classList.remove("hidden");
}

function disableOptions() {
  optionsFormEl.querySelectorAll("input[type='radio']").forEach((input) => {
    input.disabled = true;
  });
}

function showFeedback(isCorrect, message) {
  feedbackEl.classList.remove("hidden", "correct", "incorrect");
  feedbackEl.classList.add(isCorrect ? "correct" : "incorrect");
  feedbackEl.textContent = message;
}

function renderQuestion() {
  answered = false;
  const q = questions[currentIndex];

  progressEl.textContent = `Question ${currentIndex + 1} / ${questions.length}`;
  scoreBadgeEl.textContent = `Score: ${score}`;
  questionTextEl.textContent = q.question;
  optionsFormEl.innerHTML = "";
  submitBtnEl.disabled = true;
  nextBtnEl.classList.add("hidden");
  feedbackEl.classList.add("hidden");

  q.options.forEach((option, idx) => {
    const label = document.createElement("label");
    label.className = "option-label";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = String(idx);
    radio.addEventListener("change", () => {
      if (!answered) submitBtnEl.disabled = false;
    });

    const span = document.createElement("span");
    span.textContent = option;

    label.appendChild(radio);
    label.appendChild(span);
    optionsFormEl.appendChild(label);
  });

  startTimer();
}

optionsFormEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (answered) return;

  const selected = optionsFormEl.querySelector("input[name='answer']:checked");
  if (!selected) return;

  answered = true;
  stopTimer();
  submitBtnEl.disabled = true;
  disableOptions();

  const selectedIndex = Number(selected.value);
  const currentQ = questions[currentIndex];

  const response = await fetch("/api/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ questionId: currentQ.id, selectedIndex }),
  });

  const result = await response.json();

  if (result.correct) {
    score += 1;
    scoreBadgeEl.textContent = `Score: ${score}`;
    showFeedback(true, `Correct! ${result.explanation}`);
  } else {
    showFeedback(
      false,
      `Not quite. Correct answer: "${result.correctOption}". ${result.explanation}`
    );
  }

  nextBtnEl.textContent = currentIndex === questions.length - 1 ? "See Final Score" : "Next Question";
  nextBtnEl.classList.remove("hidden");
});

nextBtnEl.addEventListener("click", () => {
  currentIndex += 1;
  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
});

async function renderLeaderboard(entries) {
  const list = entries || (await (await fetch("/api/leaderboard")).json());
  leaderboardListEl.innerHTML = "";
  list.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.name} — ${entry.score}/${entry.total}`;
    leaderboardListEl.appendChild(li);
  });
}

async function showResults() {
  stopTimer();
  quizScreenEl.classList.add("hidden");
  resultScreenEl.classList.remove("hidden");
  timerBadgeEl.textContent = "Done";

  finalScoreEl.textContent = `Final Score: ${score} / ${questions.length}`;
  const percentage = Math.round((score / questions.length) * 100);
  finalMessageEl.textContent =
    percentage >= 80
      ? "Great job! You nailed most of the questions."
      : percentage >= 50
      ? "Solid effort! Review the explanations and try again."
      : "Good practice round — give it another shot!";

  saveScoreFormEl.classList.remove("hidden");
  await renderLeaderboard();
}

saveScoreFormEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = playerNameInputEl.value.trim();
  if (!name) return;

  const res = await fetch("/api/leaderboard", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, score, total: questions.length }),
  });

  if (res.ok) {
    const updated = await res.json();
    saveScoreFormEl.classList.add("hidden");
    playerNameInputEl.value = "";
    await renderLeaderboard(updated);
  }
});

restartBtnEl.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  resultScreenEl.classList.add("hidden");
  quizScreenEl.classList.remove("hidden");
  renderQuestion();
});

async function initQuiz() {
  const res = await fetch("/api/questions");
  const data = await res.json();
  questions = data.questions;
  renderQuestion();
}

initQuiz();