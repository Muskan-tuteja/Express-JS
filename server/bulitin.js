import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/login", (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <input type="text" name="email" placeholder="Enter Email" />
            <br><br>
            <input type="password" name="password" placeholder="Enter Password" />
            <br><br>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post("/submit", (req, res) => {
    console.log("User Login details:", req.body);
    res.send("Submit Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.listen(7800, () => {
    console.log("Server running on port 7800");
});