"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
// import socketio from "socket.io";
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const mongoConnect_1 = __importDefault(require("./database/mongoConnect"));
const colors_1 = __importDefault(require("colors"));
const link_1 = __importDefault(require("./routes/link"));
const question_1 = __importDefault(require("./routes/question"));
// ========= Express Config =========
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("welcome to deepdiive api");
});
const server = http_1.default.createServer(app);
// // connect socket server to frontend
const io = new socket_io_1.Server(server, {
    // options
    cors: {
        // production
        // origin: "https://deepdiive.netlify.app",
        // staging
        // origin: "https://deepdiive-staging.netlify.app",
        // local
        // origin: "http://localhost:3000",
        origin: ["http://localhost:3000", "https://deepdiive-staging.netlify.app", "https://deepdiive.netlify.app"],
        methods: ["GET", "POST"],
    },
});
// on connection, join the game
io.on("connection", (socket) => {
    console.log(colors_1.default.bold.blue(`web socket connected: ${socket.id}`));
    socket.on("join_game", (gameData) => {
        const roomName = gameData.game_id;
        socket.join(roomName);
        // ensure atleast two users have joined game
        if (io.sockets.adapter.rooms.get(roomName).size >= 2) {
            io.to(roomName).emit("users_ready");
        }
    });
    socket.on("next_question", (questionData) => {
        const roomName = questionData.game_id;
        const nextQuestion = questionData.question;
        io.to(roomName).emit("question", nextQuestion);
    });
    socket.on("host_game_started", (gameData) => {
        const roomName = gameData.game_id;
        io.to(roomName).emit("guest_game_can_start");
    });
    socket.on("guest_game_started", (gameData) => {
        const roomName = gameData.game_id;
        console.log("get it?");
        io.to(roomName).emit("game_start");
    });
    socket.on("end_game", (gameData) => {
        const roomName = gameData.game_id;
        console.log("ended");
        io.to(roomName).emit("game_end");
    });
    socket.on("guest_joined_game", (gameData) => {
        const roomName = gameData.game_id;
        console.log("guest joined", socket.id);
        io.to(roomName).emit("guest_join");
    });
});
// ========= connect to mongoDB =========
(0, mongoConnect_1.default)();
app.use((0, cors_1.default)());
app.use("/api/links", link_1.default);
app.use("/api/questions", question_1.default);
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
//# sourceMappingURL=server.js.map