import { TAddProduct } from "./addProducts.interface"


const createProduct = async(payload:TAddProduct) =>{
    console.log(payload)

}

export const addProductServices = {
    createProduct,
    
}