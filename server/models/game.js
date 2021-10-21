const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
  {
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Game", gameSchema);
