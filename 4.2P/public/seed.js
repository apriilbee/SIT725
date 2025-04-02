const mongoose = require("mongoose");
const Project = require("./models/Projects");

mongoose
    .connect("mongodb://localhost:27017/myProjectDB")
    .then(() => {
        const sampleDataList = [
            {
                title: "Kitten 2",
                image: "images/kitten-2.jpg",
                link: "About Kitten 2",
                description: "Demo description about Kitten 2",
            },
            {
                title: "Kitten 3",
                image: "images/kitten-3.jpg",
                link: "About Kitten 3",
                description: "Demo description about Kitten 3",
            },
        ];

        return Project.insertMany(sampleDataList);
    })
    .then(() => {
        console.log("Sample data inserted");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("Error inserting sample data:", err);
    });
