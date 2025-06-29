import { renderOrderSummary } from './checkOut/orderSummary.js';
import { renderPaymentSummary } from './checkOut/paymentSummary.js';
import { loadProductsFetch } from '../data/products.js';
//import '../data/cart-class.js';

async function loadPage(){
    await loadProductsFetch(()=>{''});
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

// Promise.all([
//   loadProductsFetch()
// ]).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });


