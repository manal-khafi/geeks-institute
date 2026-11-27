const express = require("express");

const router = express.Router();

const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderPage({ name = "", selectedEmoji = emojis[0], greeting = null, error = null }) {
  const safeName = escapeHtml(name);
  const safeGreeting = greeting ? escapeHtml(greeting) : null;

  const optionsHtml = emojis
    .map((emoji) => {
      const checked = emoji === selectedEmoji ? "checked" : "";
      return `
        <label class="emoji-option">
          <input type="radio" name="emoji" value="${emoji}" ${checked} required />
          <span class="emoji-char" aria-hidden="true">${emoji}</span>
        </label>
      `;
    })
    .join("");

  const alertHtml = error
    ? `<div class="alert error" role="alert">${escapeHtml(error)}</div>`
    : "";

  const greetingHtml = safeGreeting
    ? `
      <div class="greeting-banner" role="status">
        <div class="greeting-emoji" aria-hidden="true">${escapeHtml(selectedEmoji)}</div>
        <p class="greeting-text">${safeGreeting}</p>
      </div>
    `
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Emoji Greeting App</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #f8fafc;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 1.5rem;
    }

    .card {
      width: 100%;
      max-width: 480px;
      background: rgba(30, 41, 59, 0.92);
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
    }

    h1 {
      font-size: 1.6rem;
      margin-bottom: 0.4rem;
    }

    .subtitle {
      color: #94a3b8;
      font-size: 0.95rem;
      margin-bottom: 1.5rem;
    }

    .field {
      margin-bottom: 1.35rem;
    }

    label.field-label {
      display: block;
      font-weight: 600;
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
      color: #e2e8f0;
    }

    input[type="text"] {
      width: 100%;
      padding: 0.75rem 0.9rem;
      border-radius: 10px;
      border: 1px solid #475569;
      background: #0f172a;
      color: #f8fafc;
      font-size: 1rem;
    }

    input[type="text"]:focus {
      outline: none;
      border-color: #38bdf8;
    }

    .emoji-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 0.6rem;
    }

    .emoji-option {
      cursor: pointer;
      position: relative;
    }

    .emoji-option input {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    .emoji-char {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      padding: 0.65rem 0;
      border-radius: 10px;
      background: #0f172a;
      border: 2px solid #334155;
      transition: transform 0.12s ease, border-color 0.12s ease, background 0.12s ease;
    }

    .emoji-option input:checked + .emoji-char {
      border-color: #38bdf8;
      background: #172554;
      transform: translateY(-2px);
    }

    button {
      width: 100%;
      padding: 0.85rem 1.2rem;
      border: none;
      border-radius: 10px;
      background: #0284c7;
      color: #ffffff;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s ease;
    }

    button:hover {
      background: #0369a1;
    }

    .alert {
      margin-bottom: 1rem;
      padding: 0.8rem 1rem;
      border-radius: 10px;
      font-size: 0.92rem;
    }

    .alert.error {
      background: rgba(239, 68, 68, 0.18);
      border: 1px solid #ef4444;
      color: #fecaca;
    }

    .greeting-banner {
      margin-top: 1.5rem;
      padding: 1.25rem;
      border-radius: 12px;
      background: rgba(14, 165, 233, 0.14);
      border: 1px solid #38bdf8;
      text-align: center;
    }

    .greeting-emoji {
      font-size: 2.5rem;
      margin-bottom: 0.4rem;
    }

    .greeting-text {
      font-size: 1.15rem;
      font-weight: 600;
      color: #e0f2fe;
    }
  </style>
</head>
<body>
  <main class="card">
    <h1>Emoji Greeting</h1>
    <p class="subtitle">Enter your name and pick an emoji to generate a custom greeting.</p>

    ${alertHtml}

    <form action="/greet" method="POST">
      <div class="field">
        <label class="field-label" for="name">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="e.g., Nadia"
          value="${safeName}"
          maxlength="60"
          required
        />
      </div>

      <div class="field">
        <span class="field-label">Choose an Emoji</span>
        <div class="emoji-grid">
          ${optionsHtml}
        </div>
      </div>

      <button type="submit">Generate Greeting</button>
    </form>

    ${greetingHtml}
  </main>
</body>
</html>`;
}

router.get("/", (req, res) => {
  res.status(200).send(renderPage({}));
});

router.post("/greet", (req, res) => {
  const rawName = typeof req.body.name === "string" ? req.body.name.trim() : "";
  const rawEmoji = typeof req.body.emoji === "string" ? req.body.emoji.trim() : "";

  if (!rawName) {
    return res.status(400).send(
      renderPage({
        name: "",
        selectedEmoji: emojis.includes(rawEmoji) ? rawEmoji : emojis[0],
        error: "Please enter your name before submitting the form.",
      })
    );
  }

  const selectedEmoji = emojis.includes(rawEmoji) ? rawEmoji : emojis[0];
  const greeting = `Hello, ${rawName}! Wishing you an awesome day ${selectedEmoji}`;

  return res.status(200).send(
    renderPage({
      name: rawName,
      selectedEmoji,
      greeting,
    })
  );
});

module.exports = router;