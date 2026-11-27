const questions = [
  {
    id: 1,
    question: "Which built-in Node.js module is used to work with file paths?",
    options: ["fs", "path", "url", "os"],
    correctIndex: 1,
    explanation: "The 'path' module provides utilities for working with file and directory paths.",
  },
  {
    id: 2,
    question: "Which Express middleware parses incoming JSON request bodies?",
    options: ["express.static()", "express.Router()", "express.json()", "express.urlencoded()"],
    correctIndex: 2,
    explanation: "express.json() parses incoming requests with JSON payloads and populates req.body.",
  },
  {
    id: 3,
    question: "What does module.exports do in CommonJS?",
    options: [
      "Imports an external npm package",
      "Exposes functions, objects, or values from a file to other modules",
      "Starts an HTTP server automatically",
      "Converts CommonJS into ES modules",
    ],
    correctIndex: 1,
    explanation: "module.exports defines what another file receives when calling require().",
  },
  {
    id: 4,
    question: "Which HTTP status code typically indicates a resource was created?",
    options: ["200", "201", "204", "404"],
    correctIndex: 1,
    explanation: "201 Created is the standard response code after successfully creating a resource.",
  },
  {
    id: 5,
    question: "Which method in Array returns a new array of elements that pass a test?",
    options: ["map()", "forEach()", "filter()", "reduce()"],
    correctIndex: 2,
    explanation: "filter() returns a new array containing only elements that match the condition.",
  },
];

module.exports = questions;