import { IOrder } from './types';

/**
 * Send the orders off to the server
 */
export const sendOrders = (orders: IOrder[]) => {
  console.log(`Sent ${orders.length} to the server`);
}
