
import catchAsync from "../../utils/catchAsync";
import { orderInfoServices } from "./orderInfo.service";


const createOrderInfoController = catchAsync(async (req, res) => {
  
  
  const data = {
    ...req.body
  }
  

  // const data = {
  //   email: req.body.email,
  //   firstname: req.body.firstname,
  //   lastname: req.body.lastname,
  //   number: req.body.number,
  //   address: req.body.address,
  //   productIds: req.body.products.map(product => product.productId)
  // };
  
    const result = await orderInfoServices.createOrderInfo(data);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "order created successfully",
      data: result,
    });
});


export const orderInfoControllers = {
     createOrderInfoController,
    
  
};