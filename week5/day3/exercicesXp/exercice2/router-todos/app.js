const express = require("express");
const todosRouter = require("./routes/todos");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`Todos router server running at http://localhost:${PORT}`);
});