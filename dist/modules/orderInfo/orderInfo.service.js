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
exports.orderInfoServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderInfo_model_1 = require("./orderInfo.model");
const addProducts_model_1 = require("../addProducts/addProducts.model");
const createOrderInfo = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    // const productIds = [];
    for (const product of payload.products) {
        const session = yield mongoose_1.default.startSession();
        session.startTransaction();
        try {
            const productId = product.productId;
            const number = product.number;
            console.log(number);
            const existingProduct = yield addProducts_model_1.AddProduct.findById(productId).session(session);
            console.log(existingProduct === null || existingProduct === void 0 ? void 0 : existingProduct.quantity);
            if (existingProduct && existingProduct.quantity !== undefined && existingProduct.quantity > number) {
                existingProduct.quantity -= number;
            }
            yield (existingProduct === null || existingProduct === void 0 ? void 0 : existingProduct.save({ session }));
            const orderInfo = new orderInfo_model_1.OrderInfo(payload);
            yield orderInfo.save({ session });
            yield session.commitTransaction();
            session.endSession();
            return orderInfo;
        }
        catch (error) {
            yield session.abortTransaction();
            session.endSession();
            console.log(error);
        }
    }
    // const result =await OrderInfo.create(payload)
    return {};
});
exports.orderInfoServices = {
    createOrderInfo,
};
