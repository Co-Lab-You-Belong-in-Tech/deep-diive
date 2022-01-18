const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
let { connectDB } = require("./database/mongoConnect");
const colors = require("colors");

let linkRouter = require("./routes/link");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(colors.bold.blue(`web socket connected: ${socket.id}`));
  socket.on("join_game", (gameData) => {
    console.log(gameData, "here")
    socket.join(gameData.game_id)
  })
});


// connect to mongoDB
connectDB();

app.use(cors());
app.use("/api/links", linkRouter);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));