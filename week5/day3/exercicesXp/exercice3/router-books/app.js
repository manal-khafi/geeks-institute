const express = require("express");
const booksRouter = require("./routes/books");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Books router server running at http://localhost:${PORT}`);
});