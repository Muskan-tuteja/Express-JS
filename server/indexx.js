import express from "express";
import path from "path";

const app = express();

app.get("/Home", (req, res) => {
    const absPath = path.resolve("../client/Home.html");
    res.sendFile(absPath);
});
app.get("/login", (req, res) => {
    const absPath = path.resolve("../client/Login.html");
    res.sendFile(absPath);
});
app.get("/about", (req,res)=>{
    const absPath = path.resolve("../Client/about.html")
    res.sendFile(absPath)
});
app.use((req,res)=>{
    const absPath = path.resolve('../Client/404.html')
    res.status(404).sendFile(absPath)
})

app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});