import createError, { HttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const socketio = require("socket.io");
import cors from "cors";
// import colors from "colors";
import connectDB from "./database/mongoConnect";

const linkRouter = require("./routes/link");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, "../", 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/v1/api', linkRouter);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next) {
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

// connect to mongoDB
connectDB();

export default app;
