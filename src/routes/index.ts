import { Router } from "express";



import { addProductRoute } from "../modules/addProducts/addProducts.route";
import { orderInfoRoute } from "../modules/orderInfo/orderInfo.route";




const router  = Router()

const middleRoute = [
    
    
    {
        path:"/addProduct",
        route: addProductRoute
    },
    {
        path:"/order",
        route: orderInfoRoute
    },
    // {
    //     path:"/",
    //     route:bookingRoute
    // }


]

middleRoute.forEach(route => router.use(route.path,route.route))

export default router