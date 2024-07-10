import { model, Schema } from "mongoose";
import { TOrderInfo } from "./orderInfo.interface";

const orderInfoModel = new Schema<TOrderInfo>({
    firstname:{
        type:String,
        required:[true,"firstname is required"]
    },
    lastname:{
        type:String,
        required:[true,"lastname is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    number:{
        type:String,
        required:[true,"number is required"]
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
})

export const OrdeInfo = model<TOrderInfo>("OrdeInfo",orderInfoModel)