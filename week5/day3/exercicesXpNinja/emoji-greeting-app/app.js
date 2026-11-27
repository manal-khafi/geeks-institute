const express = require("express");
const greetingRouter = require("./routes/greeting");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", greetingRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).send("Internal server error");
});

app.listen(PORT, () => {
  console.log(`Emoji Greeting App running at http://localhost:${PORT}`);
});