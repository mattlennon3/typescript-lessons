export interface Product {
  id: number;
  name: string;
  price: number;
  type: ProductTypes;
}

export enum ProductTypes {
  Clothes,
  Shoes,
  Accessories
}

export interface PayRequest {
  discount: string;
  productIds: number[]
}

export interface PayResponse {
  totalToPay?: number;
  messages: string[];
}

/**
 * A function which can apply a discount to a collection of products
 */
export type Discount = (products: Product[]) => number;
