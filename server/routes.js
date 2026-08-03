import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/Login", (req, res) => {
  res.send("<h1>Login The page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About The page</h1>");
});
app.listen(4500);
