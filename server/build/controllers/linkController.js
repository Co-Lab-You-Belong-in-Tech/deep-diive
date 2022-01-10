"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.joinGame = exports.generateId = void 0;
const game_1 = require("../models/game");
const generateId = async (req, res) => {
    const game = await game_1.GameModel.create({});
    if (!game)
        return res.status(500).send("an error occured");
    res.status(201).json({ gameId: game._id });
};
exports.generateId = generateId;
const joinGame = async (req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    const game = await game_1.GameModel.findOne({ _id: id });
    // if (!game)
    //   return res.status(400).json({ message: `Game with id ${id} not found` });
    // if (game.users.length >= 4)
    //   return res.status(400).json({ message: `Cannot join game ${id}` });
    game.users.push(username);
    await game.save();
    return res.status(200).json({
        player: username,
        message: "game joined successfully",
    });
};
exports.joinGame = joinGame;
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const game = await game_1.GameModel.findById(id);
        res.status(200).json({ player: game.users[0] });
    }
    catch (err) {
        console.log(err);
    }
};
exports.getUser = getUser;
