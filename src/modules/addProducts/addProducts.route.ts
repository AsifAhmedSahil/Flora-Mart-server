import express  from "express";
import { addProductControllers } from "./addProducts.controller";


const router = express.Router()

router.post("/",addProductControllers.createAddProductController)



export const addProductRoute = router