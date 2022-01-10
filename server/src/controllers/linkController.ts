import { GameModel } from "../models/game";
import { Request, Response } from "express";

export const generateId = async (req: Request, res: Response) => {
  const game = await GameModel.create({});
  if (!game) return res.status(500).send("an error occured");
  res.status(201).json({ gameId: game._id });
};

export const joinGame = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username } = req.body;

  const game = await GameModel.findOne({ _id: id });
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

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const game = await GameModel.findById(id);
    res.status(200).json({ player: game.users[0] });
  } catch (err) {
    console.log(err);
  }
};

