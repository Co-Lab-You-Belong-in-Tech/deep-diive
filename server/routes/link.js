let express = require("express");
let { generateId, joinGame } = require("../controllers/linkController");

const router = express.Router();

router.get("/", generateId);
router.post("/join/:id", joinGame);

module.exports = router;
