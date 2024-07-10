import express  from "express";
import { orderInfoControllers } from "./orderInfo.controller";



const router = express.Router()

router.post("/",orderInfoControllers.createOrderInfoController)




export const orderInfoRoute = router