const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
  {
    question: "Which language runs natively in web browsers?",
    answer: "JavaScript",
  },
  {
    question: "How many continents are there on Earth?",
    answer: "7",
  },
];

const quizState = {
  currentIndex: 0,
  score: 0,
  feedback: null,
  completed: false,
  history: [],
};

function resetQuiz() {
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.feedback = null;
  quizState.completed = false;
  quizState.history = [];
}

function getCurrentQuestion() {
  if (quizState.currentIndex >= triviaQuestions.length) {
    return null;
  }
  return {
    index: quizState.currentIndex,
    total: triviaQuestions.length,
    question: triviaQuestions[quizState.currentIndex].question,
  };
}

function submitAnswer(userAnswer) {
  if (quizState.completed || quizState.currentIndex >= triviaQuestions.length) {
    quizState.completed = true;
    return {
      completed: true,
      feedback: quizState.feedback,
    };
  }

  const current = triviaQuestions[quizState.currentIndex];
  const normalizedUser = String(userAnswer || "").trim().toLowerCase();
  const normalizedCorrect = current.answer.trim().toLowerCase();
  const isCorrect = normalizedUser.length > 0 && normalizedUser === normalizedCorrect;

  if (isCorrect) {
    quizState.score += 1;
  }

  const feedback = {
    question: current.question,
    userAnswer: String(userAnswer || "").trim() || "(no answer)",
    correctAnswer: current.answer,
    isCorrect,
    message: isCorrect
      ? `Correct! "${current.answer}" is right.`
      : `Incorrect! The correct answer is "${current.answer}".`,
  };

  quizState.feedback = feedback;
  quizState.history.push(feedback);
  quizState.currentIndex += 1;

  if (quizState.currentIndex >= triviaQuestions.length) {
    quizState.completed = true;
  }

  return {
    completed: quizState.completed,
    feedback,
  };
}

function getScoreSummary() {
  return {
    score: quizState.score,
    total: triviaQuestions.length,
    completed: quizState.completed,
    history: quizState.history,
  };
}

module.exports = {
  triviaQuestions,
  quizState,
  resetQuiz,
  getCurrentQuestion,
  submitAnswer,
  getScoreSummary,
};