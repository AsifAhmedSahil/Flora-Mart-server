/* eslint-disable @typescript-eslint/no-explicit-any */



import catchAsync from "../../utils/catchAsync";

import { addProductServices } from "./addProducts.service";

type TSearch = {
  category?:string,
  sortName?:string,
  search?:string
}



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




// const getProductController = catchAsync(async (req, res) => {
//   const { category, sortName ,search } = req.query;
//   console.log(category,sortName,search)
//   const query = {};

//   if (category) {
//     query.category = category;
//   }

//   let sortOptions = {};

//   if (sortName === 'asc') {
//     sortOptions = { title: 1 }; // Sort by title in ascending order
//   } else if (sortName === 'desc') {
//     sortOptions = { title: -1 }; // Sort by title in descending order
//   }

//   // if (sortPrice === 'high') {
//   //   sortOptions = { price: 1 }; // Sort by title in ascending order
//   // }else if (sortPrice === 'low') {
//   //   sortOptions = { title: -1 }; // Sort by title in ascending order
//   // }


//   if (search) {
//     // Split search string into individual words
//     const searchWords = search.split(' ');

//     // Construct regex pattern to match the exact phrase (all words in sequence)
//     const regexPattern = searchWords.map(word => `(?=.*${word})`).join('');

//     // Add search functionality with regex pattern
//     query.title = { $regex: regexPattern, $options: 'i' }; // Case-insensitive search
//   }

//   const result = await addProductServices.getAllProduct(query, sortOptions);

//   res.status(200).json({
//     success: true,
//     statusCode: 200,
//     message: "All Products retrieved successfully",
//     data: result,
//   });
// });

const getProductController = catchAsync(async (req, res) => {
  const { category, sortName, search }:TSearch = req.query as TSearch;
  console.log(category, sortName, search);

  let query:any = {};

  if(category === 'all'){
    query = {}
  }
  else if(category) {
    query.category = category;
  }

  let sortOptions = {};

  switch (sortName) {
    case 'asc':
      sortOptions = { title: 1 }; // Sort by title in ascending order
      break;
    case 'desc':
      sortOptions = { title: -1 }; // Sort by title in descending order
      break;
    case 'high':
      sortOptions = { price: -1 }; // Sort by price in descending order (high to low)
      break;
    case 'low':
      sortOptions = { price: 1 }; // Sort by price in ascending order (low to high)
      break;
    case 'all':
      sortOptions = {  }; // Sort by price in ascending order (low to high)
      break;
    default:
      sortOptions = { title: 1 }; // Default sorting by title in ascending order
      break;
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





// const getProductController = catchAsync(async (req, res) => {
//   const { category, sortName, search, sortPrice } = req.query;
//   console.log(category, sortName, search, sortPrice);

//   const query = {};

//   if (category) {
//     query.category = category;
//   }

//   let sortCriteria = {};

//   if (sortName === 'asc') {
//     sortCriteria.title = 1; // Sort by title in ascending order
//   } else if (sortName === 'desc') {
//     sortCriteria.title = -1; // Sort by title in descending order
//   }

//   if (sortPrice === 'high') {
//     sortCriteria.price = -1; // Sort by price in descending order (high to low)
//   } else if (sortPrice === 'low') {
//     sortCriteria.price = 1; // Sort by price in ascending order (low to high)
//   }

//   if (search) {
//     // Split search string into individual words
//     const searchWords = search.split(' ');

//     // Construct regex pattern to match the exact phrase (all words in sequence)
//     const regexPattern = searchWords.map(word => `(?=.*${word})`).join('');

//     // Add search functionality with regex pattern
//     query.title = { $regex: regexPattern, $options: 'i' }; // Case-insensitive search
//   }

//   const result = await addProductServices.getAllProduct(query, sortCriteria);

//   res.status(200).json({
//     success: true,
//     statusCode: 200,
//     message: "All Products retrieved successfully",
//     data: result,
//   });
// });


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
