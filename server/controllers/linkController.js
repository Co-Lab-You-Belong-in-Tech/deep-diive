const Game = require("../models/game");

const generateId = async (req, res) => {
  const game = await Game.create({});
  if (!game) return res.status(500).send("an error occured");
  res.status(201).json({ gameId: game._id });
};

const joinGame = async (req, res) => {
  const { id } = req.params;
  const game = await Game.findOne({ _id: id });
  if (!game)
    return res.status(400).json({ message: `Game with id ${id} not found` });
  if (!game.available)
    return res.status(400).json({ message: `Cannot join game ${id}` });

  game.available = false;
  await game.save();
  return res.status(200).send("game joined successfully");
};

module.exports = { generateId, joinGame };
