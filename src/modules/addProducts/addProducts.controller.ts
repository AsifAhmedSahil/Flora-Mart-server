

import { string } from "zod";
import catchAsync from "../../utils/catchAsync";
import { AddProduct } from "./addProducts.model";



import { addProductServices } from "./addProducts.service";


const createAddProductController = catchAsync(async (req, res) => {
  if(req.body.category === 'flower'){
     req.body.categoryID = "1"
  }

    const data = {
        ...req.body,
        isDeleted:false,
        instock:true
    }
  
    const result = await addProductServices.createProduct(data);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "product created successfully",
      data: result,
    });
});

// const getProductController = catchAsync(async (req, res) => {
//   const { category , sort } = req.query;
//   console.log(category , sort)

//   const result = await addProductServices.getAllProduct(category ,sort);

//   res.status(200).json({
//     success: true,
//     statusCode: 200,
//     message: "All Products retrieved successfully",
//     data: result,
//   });
// });

const getProductController = catchAsync(async (req, res) => {
  const { category, sort ,search } = req.query;
  console.log(category,sort,search)
  const query = {};

  if (category) {
    query.category = category;
  }

  let sortOptions = {};

  if (sort === 'asc') {
    sortOptions = { title: 1 }; // Sort by title in ascending order
  } else if (sort === 'desc') {
    sortOptions = { title: -1 }; // Sort by title in descending order
  }

  if (search) {
    // Split search string into individual words
    const searchWords = search.split(' ');

    // Construct regex pattern to match the exact phrase (all words in sequence)
    const regexPattern = searchWords.map(word => `(?=.*${word})`).join('');

    // Add search functionality with regex pattern
    query.title = { $regex: regexPattern, $options: 'i' }; // Case-insensitive search
  }

  const result = await addProductServices.getAllProduct(query, sortOptions);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "All Products retrieved successfully",
    data: result,
  });
});

const getProductByCategoryController = catchAsync(async (req, res) => {

 

  
    // const result = await addProductServices.getProductByCategory(category);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "All Product retrived successfully",
      // data: result,
    });
});
const getProductByIdController = catchAsync(async (req, res) => {

    const {productId} = req.params;
    console.log(productId)
  
    const result = await addProductServices.getProductById(productId);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "All Product retrived successfully",
      data: result,
    });
});
const updateProductByIdController = catchAsync(async (req, res) => {

    const {productId} = req.params;
    const updatedData = req.body
  
    const result = await addProductServices.updateProductById(productId,updatedData);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "All Product retrived successfully",
      data: result,
    });
});

const deleteProductByIdController = catchAsync(async (req, res) => {

    const {productId} = req.params;
  
    const result = await addProductServices.deleteProductById(productId);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: " Product deleted successfully",
      data: result,
    });
});




export const addProductControllers = {
    createAddProductController,
    getProductController,
    getProductByIdController,
    updateProductByIdController,
    deleteProductByIdController,
    getProductByCategoryController
  
};
