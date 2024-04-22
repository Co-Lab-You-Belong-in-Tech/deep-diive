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
exports.dbDisconnect = exports.testDbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// import { MongoMemoryServer } from "mongodb-memory-server";
const testDbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    // const mongoServer = await MongoMemoryServer.create();
    // const uri = mongoServer.getUri();
    // await mongoose.connect(uri);
    console.log("connected to mongoose memory server");
});
exports.testDbConnect = testDbConnect;
const dbDisconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.dropDatabase();
    yield mongoose_1.default.connection.close();
    //   await mongo.stop();
});
exports.dbDisconnect = dbDisconnect;
//# sourceMappingURL=mongoTest.js.map