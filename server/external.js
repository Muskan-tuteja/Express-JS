import express from "express";
const app = express();
import morgan from "morgan";

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/users", (req, res) => {
  res.send("user Page");
});
app.get("/login", (req, res) => {
  res.send("login Page");
});
app.get("/wait", (req, res) => {
    setTimeout(()=>{
        res.send("result after 1")
    },1000)
});
app.listen(2300);
