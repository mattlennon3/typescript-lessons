export interface Product {
  name: string;
  price: number;
  type: ProductTypes;
  id: number;
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


export type Discount = (products: Product[]) => number;
