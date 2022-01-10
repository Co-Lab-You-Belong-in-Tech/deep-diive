const http = require("http");
import createError, { HttpError } from "http-errors";
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
import express, { Request, Response, NextFunction } from "express";
// import socketio from "socket.io";
const socketio = require("socket.io");
import connectDB from "./database/mongoConnect";
import cors from "cors";
import colors from "colors";

let linkRouter = require("./routes/link");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: HttpError, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//connect to socketio
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000/",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: any) => {
  console.log(colors.bold.blue("web socket connected..."));
  console.log(socket);
});

// connect to mongoDB
connectDB();

app.use("/api/links", linkRouter);

const PORT = process.env.PORT || 4040;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));

export default app;
