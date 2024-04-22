import { Request, Response } from "express";
import { GameModel } from "../models/game";

// export const generateRoomId = (req: Request, res: Response) => {
//   const game = "room-" + Math.random().toString(36).substring(7);
//   return res.status(201).json({ gameId: game });
// }

// export const generateId = async (req: Request, res: Response) => {
//   const game = await GameModel.create({});
//   if (!game) return res.status(500).send("an error occured");
//   res.status(201).json({ gameId: game._id });
// };

// export const joinGame = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { username } = req.body;

//   const game = await GameModel.findOne({ _id: id });

//   game.users.push(username);
//   await game.save();
//   return res.status(200).json({
//     player: username,
//     message: "game joined successfully",
//   });
// };

// export const getUser = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const game = await GameModel.findById(id);
//     res.status(200).json({ player: game.users });
//   } catch (err) {
//     console.log(err);
//   }
// };


export const generateId = (): string => {
  return "game-" + Math.random().toString(36).substring(7);
}

// Object to store game data in memory
const games: Record<string, string[]> = {};

export const generateIdHandler = (req: Request, res: Response) => {
  const gameId = generateId();
  games[gameId] = []; // Initialize an empty array of users for the game
  res.status(201).json({ gameId });
};

export const joinGame = (req: Request, res: Response) => {
  const { id } = req.params;
  const { username } = req.body;

  if (!games[id]) {
    return res.status(404).json({ message: "Game not found" });
  }

  console.log(games)

  games[id].push(username);
  res.status(200).json({
    player: username,
    message: "Game joined successfully",
  });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!games[id]) {
    return res.status(404).json({ message: "Game not found" });
  }

  const players = games[id];
  res.status(200).json({ players });
};