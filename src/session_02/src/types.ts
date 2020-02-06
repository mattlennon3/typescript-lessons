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