"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModel = void 0;
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
    users: {
        type: Array,
        default: [],
    },
}, {
    timestamps: true,
});
exports.GameModel = (0, mongoose_1.model)("Game", gameSchema);
//# sourceMappingURL=game.js.map