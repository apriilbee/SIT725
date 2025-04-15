// server.js
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Socket.io connection
io.on("connection", (socket) => {
    console.log("[/] User connected");

    socket.on("disconnect", () => {
        console.log("[X] User disconnected");
    });

    setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 10);
        socket.emit("number", randomNumber);
    }, 1000);
});

// Start server
server.listen(3000, () => {
    console.log(">> Server is running on http://localhost:3000");
});
