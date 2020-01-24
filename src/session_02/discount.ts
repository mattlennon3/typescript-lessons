
export interface Product {
  name: string;
  price: number;
  type: ProductTypes
}

export enum ProductTypes {
  Clothes,
  Shoes,
  Accessories
}

export type Discount = (products: Product[]) => number;
// export interface Discount = {
//   (products: Product[]): number
// };

export const xForYFactory = (xProducts: number, yPriceOf: number) => {
  const discount: Discount = (products: Product[]) => {
    const subtotal = products.map((product) => product.price)
      .reduce((prev, current) => current + prev);
    const cheapestProductPrice = Math.min(...products.map((product) => product.price));
    let total = subtotal - cheapestProductPrice;
    if(products.length > xProducts){
      
    }
    return total;
  }
  return discount;
}

export class Basket {
  private _products: Product[];
  private _discount: Discount | null;

  constructor(){
    this._products = [];
    this._discount = null;
  }

  public applyDiscount(discount: Discount) {
    this._discount = discount;
  }

  get total(): number {
    return this._discount(this._products);
  }

  /**
   * Get the cost before discounts
   */
  get subtotal_sum(): number {
    return this._products.map((product) => product.price)
      .reduce((prev, current) => current + prev);
  }

  set products(products: Product[]) {
    this._products = products;
  }

}
