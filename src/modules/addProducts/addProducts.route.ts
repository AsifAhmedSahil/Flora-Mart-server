import express  from "express";
import { addProductControllers } from "./addProducts.controller";


const router = express.Router()

router.post("/",addProductControllers.createAddProductController)
router.get("/",addProductControllers.getProductController)
router.get("/:productId",addProductControllers.getProductByIdController)
router.get("/:category",addProductControllers.getProductByCategoryController)
router.patch("/:productId",addProductControllers.updateProductByIdController)
router.delete("/:productId",addProductControllers.deleteProductByIdController)



export const addProductRoute = router