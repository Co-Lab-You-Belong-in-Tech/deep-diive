"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModel = void 0;
const { Schema, model } = require("mongoose");
const gameSchema = new Schema({
    users: {
        type: Array,
        default: [],
    },
}, {
    timestamps: true,
});
exports.GameModel = model("Game", gameSchema);
