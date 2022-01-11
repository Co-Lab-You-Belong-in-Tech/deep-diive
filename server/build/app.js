"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const socketio = require("socket.io");
const cors_1 = __importDefault(require("cors"));
// import colors from "colors";
const mongoConnect_1 = __importDefault(require("./database/mongoConnect"));
require("reflect-metadata");
const linkRouter = require("./routes/link");
const app = (0, express_1.default)();
// view engine setup
app.set('views', path.join(__dirname, "../", 'views'));
app.set('view engine', 'jade');
app.use((0, cors_1.default)());
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express_1.default.static(path.join(__dirname, 'public')));
//routes
app.use('/v1/api', linkRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
// connect to mongoDB
(0, mongoConnect_1.default)();
exports.default = app;
