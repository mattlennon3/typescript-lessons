import { xForYFactory, } from './discount';
import { Basket } from './basket';
import { ProductTypes } from './types';

describe('Basket total', () => {
  test('Basket subtotal is correct', () => {
    const basket = new Basket();
    basket.products = [{
      id: 1,
      name: 'Bag',
      price: 10,
      type: ProductTypes.Accessories
    }, {
      id: 2,
      name: 'Gloves',
      price: 5,
      type: ProductTypes.Clothes
    }];
    expect(basket.subtotal_sum).toBe(15);
  });

  describe('x for y ', () => {
    test('3 for 2 with 3 products', () => {
      const basket = new Basket();
      basket.products = [{
        id: 1,
        name: 'Bag',
        price: 10,
        type: ProductTypes.Accessories
      }, {
        id: 2,
        name: 'Gloves',
        price: 5,
        type: ProductTypes.Clothes
      }, {
        id: 3,
        name: 'Ring',
        price: 1,
        type: ProductTypes.Accessories
      }];
      const threeForTwo = xForYFactory(3, 2);
      basket.discount = threeForTwo;
      expect(basket.total).toBe(15);
    });
    test('3 for 2 with more products', () => {
      const basket = new Basket();
      basket.products = [{
        id: 1,
        name: 'Bag',
        price: 10,
        type: ProductTypes.Accessories
      }, {
        id: 2,
        name: 'Gloves',
        price: 5,
        type: ProductTypes.Clothes
      }, {
        id: 3,
        name: 'Ring',
        price: 1,
        type: ProductTypes.Accessories
      }, {
        id: 4,
        name: 'Scarf',
        price: 3,
        type: ProductTypes.Clothes
      }];
      const threeForTwo = xForYFactory(3, 2);
      basket.discount = threeForTwo;
      expect(basket.total).toBe(18);
    });
    test('3 for 2 with 2 products will apply no discount', () => {
      const basket = new Basket();
      basket.products = [{
        id: 1,
        name: 'Bag',
        price: 10,
        type: ProductTypes.Accessories
      }, {
        id: 2,
        name: 'Gloves',
        price: 5,
        type: ProductTypes.Clothes
      }];
      const threeForTwo = xForYFactory(3, 2);
      basket.discount = threeForTwo;
      expect(basket.products.length).toBe(2)
      expect(basket.total).toBe(15);
    });
  });
});
