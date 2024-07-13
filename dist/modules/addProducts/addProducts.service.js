"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductServices = void 0;
const addProducts_model_1 = require("./addProducts.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(payload)
    const isProductExist = yield addProducts_model_1.AddProduct.findOne({ title: payload.title });
    if (isProductExist) {
        throw new Error("This Product already exist! ");
    }
    const result = yield addProducts_model_1.AddProduct.create(payload);
    return result;
});
// const getAllProduct = async() =>{
//     const result =await AddProduct.find()
//     return result
// }
// category based test
// const getAllProduct = async (category: string,sort: string) => {
//     console.log(category,sort,"*********")
//     const query = {};
//     console.log(query.category)
//     if (category) {
//       query.category = category;
//     }
//     const result = await AddProduct.find(query).sort(sort); // Adjust this according to your database model
//     return result;
//   }
const getAllProduct = (query, sortOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield addProducts_model_1.AddProduct.find(query).sort(sortOptions);
    console.log(query, sortOptions);
    return result;
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield addProducts_model_1.AddProduct.findById(id);
    return result;
});
const getProductByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("category from service", category);
    // const result =await AddProduct.findOne({category:category})
    // return result
});
// const getProductByCategory = async (category: string): Promise<TAddProduct[]> => {
//     const trimmedCategory = category.trim();
//     const regex = new RegExp(trimmedCategory, 'i'); // Case-insensitive search
//     const result = await AddProduct.find({ category: regex });
//     return result;
//   };
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield addProducts_model_1.AddProduct.findByIdAndDelete(id);
    return result;
});
const updateProductById = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield addProducts_model_1.AddProduct.updateOne({ _id: id }, updatedData);
    return result;
});
exports.addProductServices = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    getProductByCategory
};
