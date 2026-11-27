const ROUND_SECONDS = 15;

let currentRound = null;
let score = 0;
let timeLeft = ROUND_SECONDS;
let countdownTimer = null;
let submitted = false;

const scoreDisplay = document.getElementById("score-display");
const timerDisplay = document.getElementById("timer-display");
const emojiDisplay = document.getElementById("emoji-display");
const hintDisplay = document.getElementById("hint-display");
const guessForm = document.getElementById("guess-form");
const optionsContainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submit-btn");
const hintBtn = document.getElementById("hint-btn");
const nextBtn = document.getElementById("next-btn");
const feedbackBox = document.getElementById("feedback-box");
const leaderboardForm = document.getElementById("leaderboard-form");
const playerNameInput = document.getElementById("player-name");
const leaderboardList = document.getElementById("leaderboard-list");

function clearTimer() {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
}

function startTimer() {
  clearTimer();
  timeLeft = ROUND_SECONDS;
  timerDisplay.textContent = `${timeLeft}s`;

  countdownTimer = setInterval(() => {
    timeLeft -= 1;
    timerDisplay.textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      clearTimer();
      if (!submitted) {
        submitted = true;
        disableInputs();
        showFeedback(false, "Time is up! Click Next Emoji to continue.");
        nextBtn.classList.remove("hidden");
      }
    }
  }, 1000);
}

function disableInputs() {
  submitBtn.disabled = true;
  hintBtn.disabled = true;
  optionsContainer.querySelectorAll("input[type='radio']").forEach((radio) => {
    radio.disabled = true;
  });
}

function showFeedback(isSuccess, text) {
  feedbackBox.classList.remove("hidden", "success", "error");
  feedbackBox.classList.add(isSuccess ? "success" : "error");
  feedbackBox.textContent = text;
}

async function loadRound() {
  submitted = false;
  feedbackBox.classList.add("hidden");
  hintDisplay.classList.add("hidden");
  nextBtn.classList.add("hidden");
  submitBtn.disabled = true;
  hintBtn.disabled = false;
  optionsContainer.innerHTML = "";

  const res = await fetch("/api/round");
  currentRound = await res.json();

  emojiDisplay.textContent = currentRound.emoji;
  hintDisplay.textContent = currentRound.hint;

  currentRound.options.forEach((optionName, index) => {
    const label = document.createElement("label");
    label.className = "option-item";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "emojiGuess";
    radio.value = optionName;
    radio.id = `option-${index}`;
    radio.addEventListener("change", () => {
      if (!submitted) {
        submitBtn.disabled = false;
      }
    });

    const span = document.createElement("span");
    span.textContent = optionName;

    label.appendChild(radio);
    label.appendChild(span);
    optionsContainer.appendChild(label);
  });

  startTimer();
}

guessForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (submitted || !currentRound) return;

  const formData = new FormData(guessForm);
  const selectedGuess = formData.get("emojiGuess");
  if (!selectedGuess) return;

  submitted = true;
  clearTimer();
  disableInputs();

  const res = await fetch("/api/guess", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      roundId: currentRound.roundId,
      guess: selectedGuess,
    }),
  });

  const result = await res.json();

  if (result.correct) {
    score += 1;
    scoreDisplay.textContent = `Score: ${score}`;
    showFeedback(true, result.message);
  } else {
    showFeedback(false, result.message);
  }

  nextBtn.classList.remove("hidden");
});

hintBtn.addEventListener("click", () => {
  hintDisplay.classList.remove("hidden");
  hintBtn.disabled = true;
});

nextBtn.addEventListener("click", () => {
  loadRound();
});

function renderLeaderboard(entries) {
  leaderboardList.innerHTML = "";
  entries.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.name} — ${entry.score} pts`;
    leaderboardList.appendChild(li);
  });
}

async function fetchLeaderboard() {
  const res = await fetch("/api/leaderboard");
  const data = await res.json();
  renderLeaderboard(data);
}

leaderboardForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = playerNameInput.value.trim();
  if (!name) return;

  const res = await fetch("/api/leaderboard", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, score }),
  });

  if (res.ok) {
    const updated = await res.json();
    renderLeaderboard(updated);
    playerNameInput.value = "";
  }
});

loadRound();
fetchLeaderboard();