import { Request, Response } from "express";
import { GameModel } from "../models/game";

export const generateId = async (req: Request, res: Response) => {
  const game = await GameModel.create({});
  if (!game) return res.status(500).send("an error occured");
  res.status(201).json({ gameId: game._id });
};

export const joinGame = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username } = req.body;

  const game = await GameModel.findOne({ _id: id });

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
    res.status(200).json({ player: game.users });
  } catch (err) {
    console.log(err);
  }
};