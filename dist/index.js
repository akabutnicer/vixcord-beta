"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("../controllers/user.controller.js");
var conversions_controller_1 = require("../controllers/conversions.controller.js");
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
app.use(express_1["default"].urlencoded({ extended: false }));
app.use(express_1["default"].json());
app.get("server/users/create", user_controller_1.createUser);
app.get("server/users/search", user_controller_1.searchUsers);
app.post("/conversations/create", conversions_controller_1.createConversation);
app.get("*/conversations", conversions_controller_1.getAllConversations);
app.post("/messages/create", conversions_controller_1.addMessageToConversation);
app.get("/messages/get", conversions_controller_1.getConversationMessages);
app.listen(4000);
