import express from "express";
const app = express();

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to teh express app!</h1>`);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
