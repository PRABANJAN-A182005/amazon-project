import { renderOrderSummary } from './checkOut/orderSummary.js';
import { renderPaymentSummary } from './checkOut/paymentSummary.js';
import { loadProducts } from '../data/products.js';
//import '../data/cart-class.js';

new Promise((resolve) => {
    loadProducts(()=>{
        resolve();
    })
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})

