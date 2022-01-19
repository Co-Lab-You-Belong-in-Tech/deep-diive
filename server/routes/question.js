let express = require("express");
let { getQuestions } = require("../controllers/questionController");

const router = express.Router();

router.get("/", getQuestions);

module.exports = router;