"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const linkController_1 = require("../controllers/linkController");
const router = express_1.default.Router();
router.get("/", linkController_1.generateId);
router.post("/join/:id", linkController_1.joinGame);
router.get("/users/:id", linkController_1.getUser);
exports.default = router;
//# sourceMappingURL=link.js.map