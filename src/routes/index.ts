import { Router } from "express";



import { addProductRoute } from "../modules/addProducts/addProducts.route";




const router  = Router()

const middleRoute = [
    
    
    {
        path:"/addProduct",
        route: addProductRoute
    },
    // {
    //     path:"/",
    //     route:bookingRoute
    // }


]

middleRoute.forEach(route => router.use(route.path,route.route))

export default router