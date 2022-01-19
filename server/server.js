const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
let { connectDB } = require("./database/mongoConnect");
const colors = require("colors");
const fs = require("fs");

let linkRouter = require("./routes/link");
let questionRouter = require("./routes/question");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/questions", (req, res) => {
//         fs.readFile("./data/questions.json", "utf-8", (err, jsonString) => {
//         if(err){
//             console.log(err);
//         }else{
//             res.send(JSON.parse(jsonString));
//             console.log(JSON.parse(jsonString));
//         }
//     })
//   });

app.get("/", (req, res) => {
    res.send("welcome to deepdiive api");
  });

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
app.use("/api/questions", questionRouter);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
