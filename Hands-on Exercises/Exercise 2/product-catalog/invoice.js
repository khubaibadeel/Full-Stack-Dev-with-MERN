import { displayAvailableProducts, calculateOrder,
  displayInvoice } from "./calculator.js";

displayAvailableProducts();
const cartItems = [
  { productId: 1, quantity: 1 }, // Laptop: Rs. 85,000
  { productId: 3, quantity: 2 }, // Keyboards: Rs. 7,000
  { productId: 5, quantity: 3 }, // USB cables: Rs. 2,100
];
displayInvoice(calculateOrder(cartItems));

// Exactly Rs. 50,000 does not qualify for a discount.
const boundaryOrder = calculateOrder([{ productId: 4, quantity: 2 }]);
console.log("\nDISCOUNT BOUNDARY CHECK");
displayInvoice(boundaryOrder);
