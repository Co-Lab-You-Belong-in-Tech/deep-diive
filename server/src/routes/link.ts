import express from "express";
import {
  generateId,
  joinGame,
  getUser,
  generateIdHandler,
} from "../controllers/linkController";

const router = express.Router();

router.get("/", generateIdHandler);
router.post("/join/:id", joinGame);
router.get("/users/:id", getUser);

export default router;