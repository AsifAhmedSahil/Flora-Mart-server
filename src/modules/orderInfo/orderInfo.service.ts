import { TOrderInfo } from "./orderInfo.interface"
import { OrderInfo } from "./orderInfo.model"


const createOrderInfo = async(payload:TOrderInfo) =>{
    // console.log(payload)

    
    
    const result =await OrderInfo.create(payload)
    return result

}

export const orderInfoServices = {
    createOrderInfo,
    
    
}