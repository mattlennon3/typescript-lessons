"use strict";
exports.__esModule = true;
var express_1 = require("express");
var discount_1 = require("./discount");
var app = express_1["default"]();
var todaysDiscounts = new Map();
// easier way of getting the total than calculating it in each discount.
todaysDiscounts.set('50% off', function (products) {
    return products.map(function (product) { return product.price; }).reduce(add, 0);
});
todaysDiscounts.set('3 for 2', discount_1.xForYFactory(3, 2));
app.get('/discounts', function (request, response) {
    response.send(todaysDiscounts.keys());
});
app.get('/payWithDiscount(or just pay)', function (request, response) {
    todaysDiscounts; // check if discount exists
    response.send();
});
var add = function (a, b) { return (a + b); };
