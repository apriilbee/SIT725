var express = require("express");
var app = express();
const mongoose = require("mongoose");

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
    .connect("mongodb://localhost:27017/myProjectDB")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

const Project = require("./public/models/Projects");
var port = process.env.port || 3000;

// REST
app.get("/api/projects", async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
});

app.listen(port, () => {
    console.log("App listening to: " + port);
});
