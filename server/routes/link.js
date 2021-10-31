let express = require("express");
let {
  generateId,
  joinGame,
  getUser,
} = require("../controllers/linkController");

const router = express.Router();

router.get("/", generateId);
router.post("/join/:id", joinGame);
router.get("/users/:id", getUser);

module.exports = router;
