var express = require("express");
var app = express();
const mongoose = require("mongoose");

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
    .connect("mongodb://192.168.50.202:27017/myProjectDB")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

const projectRoute = require("./routes/projects");
app.use('/api/projects', projectRoute);

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port);
});
