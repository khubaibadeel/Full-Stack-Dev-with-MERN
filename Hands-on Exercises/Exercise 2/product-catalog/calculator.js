import { products } from "./src/products.js";

export const money = (value) => `Rs. ${value.toLocaleString("en-PK", {
  minimumFractionDigits: 2, maximumFractionDigits: 2,
})}`;

// Part 1: filter out products whose stock is zero.
export function displayAvailableProducts() {
  const available = products.filter((product) => product.stock > 0);
  console.log("AVAILABLE PRODUCTS");
  for (const product of available) {
    console.log(`${product.name} | ${product.category} | ` +
      `${money(product.price)} | Stock: ${product.stock}`);
  }
  return available;
}

// Part 2: cart items contain a productId and a quantity.
export function calculateOrder(cartItems) {
  const quantities = new Map();
  for (const item of cartItems) {
    if (!Number.isInteger(item.quantity) || item.quantity <= 0) {
      throw new Error("Quantity must be a positive integer.");
    }
    quantities.set(item.productId,
      (quantities.get(item.productId) || 0) + item.quantity);
  }
  const items = [];
  let subtotal = 0;
  for (const [productId, quantity] of quantities) {
    const product = products.find((entry) => entry.id === productId);
    if (!product) throw new Error(`Unknown product: ${productId}`);
    if (quantity > product.stock) {
      throw new Error(`Insufficient stock for ${product.name}.`);
    }
    const lineTotal = product.price * quantity;
    items.push({ ...product, quantity, lineTotal });
    subtotal += lineTotal;
  }
  const discount = subtotal > 50000 ? subtotal * 0.10 : 0;
  const finalTotal = subtotal - discount;
  return { items, subtotal, discount, finalTotal };
}

// Part 3: print a readable invoice in the console.
export function displayInvoice(order) {
  console.log("\nPRODUCT ORDER INVOICE");
  console.log("-----------------------------------------------");
  for (const item of order.items) {
    console.log(`${item.name}: ${item.quantity} x ${money(item.price)}` +
      ` = ${money(item.lineTotal)}`);
  }
  console.log("-----------------------------------------------");
  console.log(`Subtotal:    ${money(order.subtotal)}`);
  console.log(`Discount:    ${money(order.discount)}`);
  console.log(`Final total: ${money(order.finalTotal)}`);
}
