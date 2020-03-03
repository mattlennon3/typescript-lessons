
import { Product, Discount } from './types';

export const fiftyPercentOff: Discount = (products) => {
  const subtotal = products.map((product) => product.price)
      .reduce((prev, current) => current + prev);
  return subtotal / 2;
}

export const spend100get20off: Discount = (products) => {
  const subtotal = products.map((product) => product.price)
      .reduce((prev, current) => current + prev);
  if(subtotal >= 100) {
    return subtotal - 20;
  }
  return subtotal;
}

export const xForYFactory = (xProducts: number, yPriceOf: number) => {

  const discount: Discount = (products: Product[]) => {
    const subtotal = products.map((product) => product.price)
      .reduce((prev, current) => current + prev);
      
    const cheapestProductPrice = Math.min(...products.map((product) => product.price));
    let total = subtotal - cheapestProductPrice;

    if(products.length < xProducts){
      return subtotal;
    }
    return total;
  }
  return discount;
}


