import { products } from "./src/products.js";

//  Part 1 of qustion 1
// Display products that are avalable in stock.
export function displayAvailableProducts() {
  console.log("AVAILABLE PRODUCTS");
  console.log("------------------");

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.stock > 0) {
      console.log(
        product.name +
          " | Rs. " +
          product.price +
          " | Stock: " +
          product.stock
      );
    }
  }
}

// Question 1 - Part 2
// Calculate subtotal, discount and final total.
export function calculateOrder(cartItems) {
  let subtotal = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];

    const product = products.find(function (item) {
      return item.id === cartItem.productId;
    });

    const itemTotal = product.price * cartItem.quantity;
    subtotal = subtotal + itemTotal;
  }

  let discount = 0;

  if (subtotal > 50000) {
    discount = subtotal * 0.10;
  }

  const finalTotal = subtotal - discount;

  return {
    subtotal: subtotal,
    discount: discount,
    finalTotal: finalTotal
  };
}


