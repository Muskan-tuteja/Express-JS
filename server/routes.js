import express from "express";
const app = express();

function checkAgeRouterMiddleware(req,res,next){
  console.log(req,res,next);
  
  if(!req.query.age || req.query.age<18){
    res.send("You are not is allowed to used this website")

  }else{
    next()
  }
}

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/Login", checkAgeRouterMiddleware, (req, res) => {
  res.send("<h1>Login The page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About The page</h1>");
});
app.listen(4500);
