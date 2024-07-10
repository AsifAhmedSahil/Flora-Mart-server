
import catchAsync from "../../utils/catchAsync";
import { orderInfoServices } from "./orderInfo.service";


const createOrderInfoController = catchAsync(async (req, res) => {

    const data = {
        ...req.body,
        
    }
  
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