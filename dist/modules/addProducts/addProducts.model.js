"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProduct = void 0;
const mongoose_1 = require("mongoose");
const productModel = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    price: {
        type: Number,
        required: [true, "price is required"]
    },
    rating: {
        type: Number,
        required: [true, "rating is required"]
    },
    quantity: {
        type: Number,
        required: [true, "quantity is required"]
    },
    image: {
        type: String,
        required: [true, "image is required"]
    },
});
exports.AddProduct = (0, mongoose_1.model)("AddProduct", productModel);
