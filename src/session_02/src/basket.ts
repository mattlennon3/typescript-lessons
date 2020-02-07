import { Product, ProductTypes, Discount } from './types';

export class Basket {
    private _products: Product[];
    private _discount: Discount | null;
  
    constructor(){
      this._products = [];
      this._discount = null;
    }
  
    get total(): number {
      if(this._discount) {
        return this._discount(this._products);
      }
      return this.subtotal_sum;
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

    get products() {
      return this._products;
    }
  
    set discount(discount: Discount) {
      this._discount = discount;
    }
  
  }
  