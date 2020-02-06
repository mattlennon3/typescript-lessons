"use strict";
exports.__esModule = true;
// export interface Discount = {
//   (products: Product[]): number
// };
exports.xForYFactory = function (xProducts, yPriceOf) {
    var discount = function (products) {
        var subtotal = products.map(function (product) { return product.price; })
            .reduce(function (prev, current) { return current + prev; });
        var cheapestProductPrice = Math.min.apply(Math, products.map(function (product) { return product.price; }));
        var total = subtotal - cheapestProductPrice;
        // TODO: Reject when less products than discount minimum
        if (products.length <= xProducts) {
            console.log(products.length, xProducts);
        }
        return total;
    };
    return discount;
};
