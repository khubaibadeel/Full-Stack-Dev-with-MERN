import {
  displayAvailableProducts,
  calculateOrder,
  displayInvoice,
} from "./calculator.js";

// A small sample cart for testing our program.
const cartItems = [
  { productId: 1, quantity: 1 },
  { productId: 3, quantity: 2 },
  { productId: 5, quantity: 3 },
];

// Part 1
// Display products whose stock is greater than 0.
displayAvailableProducts();

// Part 2
// Calculate the order totals.
const order = calculateOrder(cartItems);

// Part 3
// Display the invoice.
displayInvoice(cartItems, order);
