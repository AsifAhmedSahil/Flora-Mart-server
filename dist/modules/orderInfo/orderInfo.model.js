"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInfo = void 0;
const mongoose_1 = require("mongoose");
const orderInfoModel = new mongoose_1.Schema({
    firstname: {
        type: String,
        required: [true, "firstname is required"]
    },
    lastname: {
        type: String,
        required: [true, "lastname is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    number: {
        type: String,
        required: [true, "number is required"]
    },
    address: {
        type: String,
        required: [true, "address is required"]
    },
    payment: {
        type: String,
        required: [true, "payment is required"]
    },
});
exports.OrderInfo = (0, mongoose_1.model)("OrderInfo", orderInfoModel);
