/* eslint-disable @typescript-eslint/no-explicit-any */
import { TAddProduct } from "./addProducts.interface"
import { AddProduct } from "./addProducts.model"


const createProduct = async(payload:TAddProduct) =>{
    // console.log(payload)

    const isProductExist = await AddProduct.findOne({title:payload.title})
    if(isProductExist){
        throw new Error("This Product already exist! ")
    }
    
    const result =await AddProduct.create(payload)
    return result

}
// const getAllProduct = async() =>{
    
     
    
//     const result =await AddProduct.find()
//     return result

// }

// category based test
const getAllProduct = async (category: string) => {
    console.log(category)
    const query = {};
    console.log(query.category)
    if (category) {
      query.category = category;
    }
    const result = await AddProduct.find(query); // Adjust this according to your database model
    return result;
  }

const getProductById = async(id:string) =>{
    
    const result =await AddProduct.findById(id)
    return result

}
const getProductByCategory = async(category:string) =>{
    console.log("category from service",category)
    
    // const result =await AddProduct.findOne({category:category})
    // return result

}

// const getProductByCategory = async (category: string): Promise<TAddProduct[]> => {
//     const trimmedCategory = category.trim();
//     const regex = new RegExp(trimmedCategory, 'i'); // Case-insensitive search
  
//     const result = await AddProduct.find({ category: regex });
//     return result;
//   };

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
    deleteProductById,
    getProductByCategory
    
}