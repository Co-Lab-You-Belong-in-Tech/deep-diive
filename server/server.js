const http = require("http");
const express = require("express");
// const socketio = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");

let linkRouter = require("./routes/link");

const app = express();
const server = http.createServer(app);
// const io = socketio(server);

const io = require("socket.io")(3005, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("web socket connected...");
});

// connect to mongoDB
const dbURI =
  "mongodb+srv://dimola:morgan27@jada-db.4am7c.mongodb.net/jada-card-DB?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

app.use(cors());
app.use("/links", linkRouter);

const PORT = 8080 || process.env.PORT;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
