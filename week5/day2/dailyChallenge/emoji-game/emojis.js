const crypto = require("crypto");

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚀", name: "Rocket" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "🎸", name: "Guitar" },
  { emoji: "🌈", name: "Rainbow" },
  { emoji: "🍦", name: "Ice Cream" },
  { emoji: "🦊", name: "Fox" },
  { emoji: "⚽", name: "Soccer Ball" },
  { emoji: "🌙", name: "Crescent Moon" },
  { emoji: "☕", name: "Coffee" },
  { emoji: "🐢", name: "Turtle" },
];

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createRound(distractorCount = 3) {
  const target = emojis[Math.floor(Math.random() * emojis.length)];
  const distractors = shuffleArray(
    emojis.filter((item) => item.name !== target.name)
  ).slice(0, distractorCount);

  const options = shuffleArray([
    target.name,
    ...distractors.map((item) => item.name),
  ]);

  const roundId = crypto.randomUUID();
  const hint = `Starts with "${target.name[0]}" (${target.name.length} characters)`;

  return {
    roundId,
    emoji: target.emoji,
    options,
    correctName: target.name,
    hint,
  };
}

module.exports = {
  emojis,
  createRound,
};