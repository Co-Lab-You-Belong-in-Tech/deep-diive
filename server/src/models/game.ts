const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
  {
    users: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const GameModel = model("Game", gameSchema);