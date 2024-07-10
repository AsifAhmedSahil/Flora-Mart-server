/* eslint-disable @typescript-eslint/no-explicit-any */
import { TAddProduct } from "./addProducts.interface"
import { AddProduct } from "./addProducts.model"


const createProduct = async(payload:TAddProduct) =>{
    console.log(payload)
    
    const result =await AddProduct.create(payload)
    return result

}
const getAllProduct = async() =>{
    
    const result =await AddProduct.find()
    return result

}
const getProductById = async(id:string) =>{
    
    const result =await AddProduct.findById(id)
    return result

}
const deleteProductById = async(id:string) =>{
    
    const result =await AddProduct.findByIdAndDelete(id)
    return result

}
const updateProductById = async(id:string,updatedData:any) =>{
    
    const result =await AddProduct.updateOne({_id:id},updatedData)
    return result

}

export const addProductServices = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById
    
}