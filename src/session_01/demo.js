import { sendOrders } from './send_order';

const products = [{
  name: 'Red Dress',
  price: 23.00
}, {
  name: 'Black Boots',
  price: 100
}];

/**
 * Some docs
 * @param product
 */
export const productToOrder = (product) => {
 return {
   description: product.name,
   cost: String(product.price)
 }
};

sendOrders( products.map((product) => productToOrder(product)) );
