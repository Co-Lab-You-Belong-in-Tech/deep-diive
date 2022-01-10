"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
// connect to mongoDB
const connectDB = async () => {
    const dbURI = "mongodb+srv://dimola:morgan27@jada-db.4am7c.mongodb.net/jada-card-DB?retryWrites=true&w=majority";
    try {
        await mongoose_1.default.connect(dbURI || process.env.MONGODB_URI);
        console.log(colors_1.default.bold.green("connected to database"));
    }
    catch (error) {
        console.log(error);
        console.log(colors_1.default.bold.red("an error occurred, couldn't connect to the database"));
        console.log("herr");
    }
};
exports.default = connectDB;
