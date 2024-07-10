

import catchAsync from "../../utils/catchAsync";



import { addProductServices } from "./addProducts.service";


const createAddProductController = catchAsync(async (req, res) => {
  
    const result = await addProductServices.createProduct(req.body);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Booking created successfully",
      data: result,
    });
});





export const addProductControllers = {
    createAddProductController,
  
};
