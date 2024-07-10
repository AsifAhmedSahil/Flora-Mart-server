import express  from "express";
import { addProductControllers } from "./addProducts.controller";


const router = express.Router()

router.post("/",addProductControllers.createAddProductController)
router.get("/",addProductControllers.getProductController)



export const addProductRoute = router