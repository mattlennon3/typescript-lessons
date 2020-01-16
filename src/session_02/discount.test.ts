import {Basket, Product, Discount, xForYFactory} from './discount';

const basket = new Basket();

const products: Product[] = [{
  name: 'Bag',
  price: 10
}, {
  name: 'Gloves',
  price: 5
}, {
  name: 'Ring',
  price: 1
}];

describe('Basket total', () => {

  test('Basket subtotal is correct', () => {
    basket.products = products;
    expect(basket.subtotal_sum).toBe(16);
  });

  test('Basket total will apply discounts', () => {
    basket.products = products;
  });

  describe('x for y ', () => {
    test('3 for 2', () => {
      basket.products = products;
      const threeForTwo = xForYFactory(3, 2);
      basket.applyDiscount(threeForTwo);
      expect(basket.total).toBe(15)
    })
  });
  // test('')

});
