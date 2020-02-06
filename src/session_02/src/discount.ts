
import { ProductTypes, Product, Discount } from './types';
// export interface Discount = {
//   (products: Product[]): number
// };

export const xForYFactory = (xProducts: number, yPriceOf: number) => {
  const discount: Discount = (products: Product[]) => {
    const subtotal = products.map((product) => product.price)
      .reduce((prev, current) => current + prev);
    const cheapestProductPrice = Math.min(...products.map((product) => product.price));
    let total = subtotal - cheapestProductPrice;
    // TODO: Reject when less products than discount minimum
    if(products.length <= xProducts){
      return subtotal;
    }
    return total;
  }
  return discount;
}


