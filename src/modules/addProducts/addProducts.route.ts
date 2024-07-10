import express  from "express";
import { addProductControllers } from "./addProducts.controller";


const router = express.Router()

router.post("/",addProductControllers.createAddProductController)
router.get("/",addProductControllers.getProductController)
router.get("/:productId",addProductControllers.getProductByIdController)



export const addProductRoute = router