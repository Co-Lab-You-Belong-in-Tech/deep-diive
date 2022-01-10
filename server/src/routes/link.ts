import * as express from "express";
import {
    generateId,
    joinGame,
    getUser,
  } from "../controllers/linkController";

const router = express.Router();

router.get("/", generateId);
router.get("/a", (req, res) => {
    res.send("works")
} );
router.post("/join/:id", joinGame);
router.get("/users/:id", getUser);

module.exports = router;