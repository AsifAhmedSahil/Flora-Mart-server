import mongoose from "mongoose";
import { TOrderInfo } from "./orderInfo.interface"
import { OrderInfo } from "./orderInfo.model"
import { AddProduct } from "../addProducts/addProducts.model";




const createOrderInfo = async(payload:TOrderInfo) =>{
    console.log(payload )
    
    

    // const productIds = [];

for (const product of payload.products) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const productId = product.productId
        const number = product.number
        console.log(number)
        const existingProduct = await AddProduct.findById(productId).session(session)
        console.log(existingProduct?.quantity)
        if (existingProduct && existingProduct.quantity !== undefined && existingProduct.quantity > number) {
            existingProduct.quantity -= number;
        }
        


        await existingProduct?.save({ session });

        const orderInfo = new OrderInfo(payload);
        await orderInfo.save({ session });

        await session.commitTransaction();
        session.endSession();

        return orderInfo
        

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.log(error)
        
        
    }
  
}
    
    
    // const result =await OrderInfo.create(payload)
    return {}

}

export const orderInfoServices = {
    createOrderInfo,
    
    
}