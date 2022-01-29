const Game = require("../models/game");

const generateId = async (req, res) => {
  const game = await Game.create({});
  if (!game) return res.status(500).send("an error occured");
  res.status(201).json({ gameId: game._id });
};

const joinGame = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  const game = await Game.findOne({ _id: id });

  game.users.push(username);
  await game.save();
  return res.status(200).json({
    player: username,
    message: "game joined successfully",
  });
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);
    res.status(200).json({ player: game.users });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { generateId, joinGame, getUser };
