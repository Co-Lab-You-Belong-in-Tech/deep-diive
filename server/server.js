const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
let { connectDB } = require("./database/mongoConnect");
const colors = require("colors");

let linkRouter = require("./routes/link");
let questionRouter = require("./routes/question");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("welcome to deepdiive api");
  });

const server = http.createServer(app);

// connect socket server to frontend
const io = socketio(server, {
  cors: {
    origin: "https://deepdiive.netlify.app",
    // origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// on connection, join the game
io.on("connection", (socket) => {
  console.log(colors.bold.blue(`web socket connected: ${socket.id}`));
  socket.on("join_game", (gameData) => {

    const roomName = gameData.game_id;

    socket.join(roomName)

    // ensure atleast two users have joined game
    if (io.sockets.adapter.rooms.get(roomName).size >= 2) {
        io.to(roomName).emit("users_ready")
    }
  })

  socket.on("next_question", (questionData) => {
    const roomName = questionData.game_id;
    const nextQuestion = questionData.question;
    
    io.to(roomName).emit("question", nextQuestion)
  })

  socket.on("host_game_started", (gameData) => {
    const roomName = gameData.game_id;

    io.to(roomName).emit("guest_game_can_start")
  })

  socket.on("guest_game_started", (gameData) => {
    const roomName = gameData.game_id;
    console.log("get it?")
    io.to(roomName).emit("game_start")
  })

  socket.on("end_game", (gameData) => {
    const roomName = gameData.game_id;
    console.log("ended");
    io.to(roomName).emit("game_end")
  })

  socket.on("emoji_change_host", (questionData) => {
    //const roomName = gameData.game_id;
    const emojiChange = questionData.emoji;

    io.to(roomName).emit("emoji", emojiChange)
  })

  // socket.on("emoji_change_guest", (gameData) => {
  //   const roomName = gameData.game_id;
  //   io.to(roomName).emit("emoji_change_host")
  // })

}); 

// connect to mongoDB
connectDB();

app.use(cors());
app.use("/api/links", linkRouter);
app.use("/api/questions", questionRouter);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
