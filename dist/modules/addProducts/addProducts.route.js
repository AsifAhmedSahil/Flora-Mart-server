"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const addProducts_controller_1 = require("./addProducts.controller");
const router = express_1.default.Router();
router.post("/", addProducts_controller_1.addProductControllers.createAddProductController);
router.get("/", addProducts_controller_1.addProductControllers.getProductController);
router.get("/:productId", addProducts_controller_1.addProductControllers.getProductByIdController);
router.get("/:category", addProducts_controller_1.addProductControllers.getProductByCategoryController);
router.patch("/:productId", addProducts_controller_1.addProductControllers.updateProductByIdController);
router.delete("/:productId", addProducts_controller_1.addProductControllers.deleteProductByIdController);
exports.addProductRoute = router;
