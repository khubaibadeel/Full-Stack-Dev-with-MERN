import { products } from "./src/products.js";

// Question 1 - Part 1
// Show only the products that have stock available.
export function displayAvailableProducts() {
  console.log("AVAILABLE PRODUCTS");
  console.log("------------------");

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

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
    let cartItem = cartItems[i];

    let product = products.find(function (product) {
      return product.id === cartItem.productId;
    });

    let itemTotal = product.price * cartItem.quantity;
    subtotal = subtotal + itemTotal;
  }

  let discount = 0;

  if (subtotal > 50000) {
    discount = subtotal * 0.1;
  }

  let finalTotal = subtotal - discount;

  return {
    subtotal: subtotal,
    discount: discount,
    finalTotal: finalTotal,
  };
}

// Question 1 - Part 3
// Display a simple invoice in the console.
export function displayInvoice(cartItems, order) {
  console.log("\nPRODUCT ORDER INVOICE");
  console.log("---------------------");

  for (let i = 0; i < cartItems.length; i++) {
    let cartItem = cartItems[i];

    let product = products.find(function (product) {
      return product.id === cartItem.productId;
    });

    let itemTotal = product.price * cartItem.quantity;

    console.log(
      product.name +
        " - " +
        cartItem.quantity +
        " x Rs. " +
        product.price +
        " = Rs. " +
        itemTotal
    );
  }

  console.log("---------------------");
  console.log("Subtotal: Rs. " + order.subtotal);
  console.log("Discount: Rs. " + order.discount);
  console.log("Final Total: Rs. " + order.finalTotal);
}
