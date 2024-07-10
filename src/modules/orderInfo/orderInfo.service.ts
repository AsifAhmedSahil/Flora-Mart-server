import { TOrderInfo } from "./orderInfo.interface"
import { OrdeInfo } from "./orderInfo.model"


const createOrderInfo = async(payload:TOrderInfo) =>{
    // console.log(payload)

    
    
    const result =await OrdeInfo.create(payload)
    return result

}

export const orderInfoServices = {
    createOrderInfo,
    
    
}