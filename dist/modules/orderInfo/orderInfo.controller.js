"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderInfoControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const orderInfo_service_1 = require("./orderInfo.service");
const createOrderInfoController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = Object.assign({}, req.body);
    // const data = {
    //   email: req.body.email,
    //   firstname: req.body.firstname,
    //   lastname: req.body.lastname,
    //   number: req.body.number,
    //   address: req.body.address,
    //   productIds: req.body.products.map(product => product.productId)
    // };
    const result = yield orderInfo_service_1.orderInfoServices.createOrderInfo(data);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "order created successfully",
        data: result,
    });
}));
exports.orderInfoControllers = {
    createOrderInfoController,
};
