import {Basket, Product, Discount, xForYFactory, ProductTypes} from './discount';

describe('Basket total', () => {
  test('Basket subtotal is correct', () => {
    const basket = new Basket();
    basket.products = [{
      name: 'Bag',
      price: 10,
      type: ProductTypes.Accessories
    }, {
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
        name: 'Bag',
        price: 10,
        type: ProductTypes.Accessories
      }, {
        name: 'Gloves',
        price: 5,
        type: ProductTypes.Clothes
      }, {
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
        name: 'Bag',
        price: 10,
        type: ProductTypes.Accessories
      }, {
        name: 'Gloves',
        price: 5,
        type: ProductTypes.Clothes
      }, {
        name: 'Ring',
        price: 1,
        type: ProductTypes.Accessories
      }, {
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
        name: 'Bag',
        price: 10,
        type: ProductTypes.Accessories
      }, {
        name: 'Gloves',
        price: 5,
        type: ProductTypes.Clothes
      }];
      const threeForTwo = xForYFactory(3, 2);
      basket.discount = threeForTwo;
      expect(basket.total).toBe(15);
    });
    
    
  });
  // test('')

});
