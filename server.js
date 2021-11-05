const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
let { connectDB } = require("./server/database/mongoConnect");
const colors = require("colors");

let linkRouter = require("./server/routes/link");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client/build"));

app.get("/v1/*", (req, res) => {
  res.sendFile("./client/build/index.html");
});

const server = http.createServer(app);

// const io = socketio(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
  // },
// });

// io.on("connection", (socket) => {
//   console.log(colors.bold.blue("web socket connected..."));
// });

// connect to mongoDB
connectDB();

app.use(cors());
app.use("/api/links", linkRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
