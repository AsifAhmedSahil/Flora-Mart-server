"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProduct = void 0;
const mongoose_1 = require("mongoose");
const productModel = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
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
    category: {
        type: String,
        required: [true, "category is required"]
    },
    categoryID: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    isDeleted: {
        type: Boolean
    },
    instock: {
        type: Boolean
    }
});
exports.AddProduct = (0, mongoose_1.model)("AddProduct", productModel);
