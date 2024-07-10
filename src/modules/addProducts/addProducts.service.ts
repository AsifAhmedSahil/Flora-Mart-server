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

export const addProductServices = {
    createProduct,
    getAllProduct
    
}