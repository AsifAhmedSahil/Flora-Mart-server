"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderInfoRoute = void 0;
const express_1 = __importDefault(require("express"));
const orderInfo_controller_1 = require("./orderInfo.controller");
const router = express_1.default.Router();
router.post("/", orderInfo_controller_1.orderInfoControllers.createOrderInfoController);
exports.orderInfoRoute = router;
