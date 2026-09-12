import {
  displayAvailableProducts,
  calculateOrder,
  displayInvoice
} from "./calculator.js";

// Sample cart items
const cartItems = [
  { productId: 1, quantity: 1 },
  { productId: 3, quantity: 2 },
  { productId: 5, quantity: 3 }
];

// Run Question 1
// Part 1: display available products
displayAvailableProducts();

// Part 2: calculate order totals
const order = calculateOrder(cartItems);

// Part 3: display invoice
displayInvoice(cartItems, order);
