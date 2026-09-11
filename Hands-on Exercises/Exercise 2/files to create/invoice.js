import {
  displayAvailableProducts,
  calculateOrder,
  displayInvoice
} from "./calculator.js";

// Products that the customer wants to buy
const cartItems = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 2 },
  { productId: 5, quantity: 3 }
];

// Show products that are available
displayAvailableProducts();

// Calculate the order
const order = calculateOrder(cartItems);

// Display the invoice
displayInvoice(cartItems, order);