import { IProduct, IOrder } from './types';
import { sendOrders } from './send_order';



const productsInBasket: IProduct[] = [{
  name: 'Red Dress',
  price: 20.00
}, {
  name: 'Black boots',
  price: 40.00
}];

const productIntoOrder = (product: IProduct): IOrder => {
  return {
    cost: product.name,
    description: product.price
  }
}

const ordersToSend = productsInBasket.map((product) => productIntoOrder(product));

if(ordersToSend.length > 1) {
  sendOrders(ordersToSend);
}
