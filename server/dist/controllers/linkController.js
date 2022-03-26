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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.joinGame = exports.generateId = void 0;
const game_1 = require("../models/game");
const generateId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield game_1.GameModel.create({});
    if (!game)
        return res.status(500).send("an error occured");
    res.status(201).json({ gameId: game._id });
});
exports.generateId = generateId;
const joinGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { username } = req.body;
    const game = yield game_1.GameModel.findOne({ _id: id });
    game.users.push(username);
    yield game.save();
    return res.status(200).json({
        player: username,
        message: "game joined successfully",
    });
});
exports.joinGame = joinGame;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const game = yield game_1.GameModel.findById(id);
        res.status(200).json({ player: game.users });
    }
    catch (err) {
        console.log(err);
    }
});
exports.getUser = getUser;
//# sourceMappingURL=linkController.js.map