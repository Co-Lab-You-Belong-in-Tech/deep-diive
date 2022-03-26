"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
// connect to mongoDB
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const dbURI = "mongodb+srv://dimola:morgan27@jada-db.4am7c.mongodb.net/jada-card-DB?retryWrites=true&w=majority";
    try {
        yield mongoose_1.default.connect(dbURI || process.env.MONGODB_URI);
        console.log(colors_1.default.bold.green("connected to database"));
    }
    catch (error) {
        console.log(error);
        console.log(colors_1.default.bold.red("an error occurred, couldn't connect to the database"));
    }
});
exports.default = connectDB;
//# sourceMappingURL=mongoConnect.js.map