import { model, Schema } from "mongoose";
import { TAddProduct } from "./addProducts.interface";

const productModel = new Schema<TAddProduct>({
    name:{
        type: String,
        required: [true,"name is required"]
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
})

export const AddProduct = model<TAddProduct>("AddProduct",productModel)