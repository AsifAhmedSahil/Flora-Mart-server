import { model, Schema } from "mongoose";
import { TAddProduct } from "./addProducts.interface";

const productModel = new Schema<TAddProduct>({
    title:{
        type: String,
        required: [true,"title is required"]
    },
    price:{
        type: Number,
        required: [true,"price is required"]
    },
    rating:{
        type: Number,
        required: [true,"rating is required"]
    },
    quantity:{
        type: Number,
        required: [true,"quantity is required"]
    },
    image:{
        type: String,
        required: [true,"image is required"]
    },
    category:{
        type: String,
        required: [true,"category is required"]
    },
})

export const AddProduct = model<TAddProduct>("AddProduct",productModel)