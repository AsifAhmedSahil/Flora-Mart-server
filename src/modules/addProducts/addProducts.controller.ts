

import catchAsync from "../../utils/catchAsync";



import { addProductServices } from "./addProducts.service";


const createAddProductController = catchAsync(async (req, res) => {

    const data = {
        ...req.body,
        isDeleted:false
    }
  
    const result = await addProductServices.createProduct(data);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "product created successfully",
      data: result,
    });
});

const getProductController = catchAsync(async (req, res) => {
  
    const result = await addProductServices.getAllProduct();

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "All Product retrived successfully",
      data: result,
    });
});
const getProductByIdController = catchAsync(async (req, res) => {

    const {productId} = req.params;
  
    const result = await addProductServices.getProductById(productId);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "All Product retrived successfully",
      data: result,
    });
});





export const addProductControllers = {
    createAddProductController,
    getProductController,
    getProductByIdController
  
};
