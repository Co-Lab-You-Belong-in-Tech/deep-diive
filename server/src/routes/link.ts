import express from "express";
import {
  generateId,
  joinGame,
  getUser,
} from "../controllers/linkController";

const router = express.Router();

router.get("/", generateId);
router.post("/join/:id", joinGame);
router.get("/users/:id", getUser);

export default router;