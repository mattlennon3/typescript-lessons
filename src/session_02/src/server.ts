import express from 'express';

import { Discount, Product } from './types';

import { xForYFactory } from './discount';


const app = express();

const todaysDiscounts: Map<string, Discount> = new Map();

// easier way of getting the total than calculating it in each discount.

todaysDiscounts.set('50% off', (products) => {
    return products.map((product) => product.price).reduce(add, 0);
});

todaysDiscounts.set('3 for 2', xForYFactory(3, 2));


app.get('/discounts', (request, response) => {
    response.send(todaysDiscounts.keys());
})

app.get('/payWithDiscount(or just pay)', (request, response) => {
    
    // take products
    // get total
    // apply discount

    // 



        
    request

    todaysDiscounts // check if discount exists

    response.send()
});


const add = (a: number, b: number) => (a + b);
