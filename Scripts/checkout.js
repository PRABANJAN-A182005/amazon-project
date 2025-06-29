import { renderOrderSummary } from './checkOut/orderSummary.js';
import { renderPaymentSummary } from './checkOut/paymentSummary.js';
import { loadProductsFetch } from '../data/products.js';
//import '../data/cart-class.js';

Promise.all([
  loadProductsFetch()
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});


