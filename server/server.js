const http = require("http");
const express = require("express");
// const socketio = require("socket.io");
const cors = require("cors");
let { connectDB } = require("./database/mongoConnect");
const colors = require("colors");

let linkRouter = require("./routes/link");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);
// const io = socketio(server);

const io = require("socket.io")(3005, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(colors.bold.blue("web socket connected..."));
});

// connect to mongoDB
connectDB();

app.use(cors());
app.use("/links", linkRouter);

const PORT = 8080 || process.env.PORT;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
