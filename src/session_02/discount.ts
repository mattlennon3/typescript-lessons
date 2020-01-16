
export interface Product {
  name: string;
  price: number;
}

export type Discount = (products: Product[]) => number;

export const xForYFactory = (xProducts: number, yPriceOf: number) => {
  const discount: Discount = (products: Product[]) => {
    const subtotal = products.map((product) => product.price)
      .reduce((prev, current) => current + prev);
    const cheapestProductPrice = Math.min(...products.map((product) => product.price));
    return subtotal - cheapestProductPrice;
  }
  return discount;
}
// tslint:disable-next-line: max-classes-per-file
// class Discount {

//   public xForY(xProducts, yPriceOf) {
//     // get total
//     // find lowest priced product
//     // minus lowest price from total
//     // return
//   }
// }

// tslint:disable-next-line: max-classes-per-file
export class Basket {
  private _products: Product[];
  private _discounts: Discount[] = [];

  public applyDiscount(discount: Discount) {
    this._discounts.push(discount);
  }

  get total(): number {
    return this._discounts.map((discount) => discount(this._products))
      .reduce((prev, current) => current + prev);
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

// /**
//  * e.g 3 for 2
//  * @param amount Amount of total products
//  */
// // tslint:disable-next-line: max-classes-per-file
// class Promotion {

//   xForY(xProducts, yPriceOf) {
//     // get total
//     // find lowest priced product
//     // minus lowest price from total
//     // return


//   }
// }
