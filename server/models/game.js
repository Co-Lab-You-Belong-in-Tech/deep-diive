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

module.exports = model("Game", gameSchema);
