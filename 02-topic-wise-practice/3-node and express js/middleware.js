const express = require("express");

const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);
    next();
});

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Middleware Demo");
});

// Student route
app.get("/student", (req, res) => {
    res.send("Student details displayed");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});