"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addProducts_route_1 = require("../modules/addProducts/addProducts.route");
const router = (0, express_1.Router)();
const middleRoute = [
    {
        path: "/addProduct",
        route: addProducts_route_1.addProductRoute
    },
    // {
    //     path:"/",
    //     route:bookingRoute
    // }
];
middleRoute.forEach(route => router.use(route.path, route.route));
exports.default = router;
