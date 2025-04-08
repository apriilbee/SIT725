import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import projectRoute from "./routes/projects.js";

// These two lines fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();

// Middleware
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
    .connect("mongodb://localhost:27017/myProjectDB")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/projects", projectRoute);

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port);
});

app.get("/addTwoNumbers/:firstNumber/:secondNumber", function (req, res, next) {
    var firstNumber = parseInt(req.params.firstNumber);
    var secondNumber = parseInt(req.params.secondNumber);
    var result = firstNumber + secondNumber || null;

    if (result == null) {
        res.status(400).json({ result: result, statusCode: 400 });
    } else {
        res.status(200).json({ result: result, statusCode: 200 });
    }
});
