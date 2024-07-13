"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const addProducts_service_1 = require("./addProducts.service");
const createAddProductController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.category === 'flower') {
        req.body.categoryID = "1";
    }
    const data = Object.assign(Object.assign({}, req.body), { isDeleted: false, instock: true });
    const result = yield addProducts_service_1.addProductServices.createProduct(data);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "product created successfully",
        data: result,
    });
}));
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
const getProductController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, sortName, search } = req.query;
    console.log(category, sortName, search);
    let query = {};
    if (category === 'all') {
        query = {};
    }
    else if (category) {
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
            sortOptions = {}; // Sort by price in ascending order (low to high)
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
    const result = yield addProducts_service_1.addProductServices.getAllProduct(query, sortOptions);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "All Products retrieved successfully",
        data: result,
    });
}));
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
const getProductByCategoryController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await addProductServices.getProductByCategory(category);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "All Product retrived successfully",
        // data: result,
    });
}));
const getProductByIdController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    console.log(productId);
    const result = yield addProducts_service_1.addProductServices.getProductById(productId);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "All Product retrived successfully",
        data: result,
    });
}));
const updateProductByIdController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const updatedData = req.body;
    const result = yield addProducts_service_1.addProductServices.updateProductById(productId, updatedData);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "All Product retrived successfully",
        data: result,
    });
}));
const deleteProductByIdController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield addProducts_service_1.addProductServices.deleteProductById(productId);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: " Product deleted successfully",
        data: result,
    });
}));
exports.addProductControllers = {
    createAddProductController,
    getProductController,
    getProductByIdController,
    updateProductByIdController,
    deleteProductByIdController,
    getProductByCategoryController
};
