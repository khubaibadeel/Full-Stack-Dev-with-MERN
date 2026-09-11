// OPTIONAL FILE
// The DigiSkills exercise does not require automated tests.
// Keep this only if you want to see a very small Node.js test example.

import test from "node:test";
import assert from "node:assert/strict";
import { calculateOrder } from "./calculator.js";

test("10% discount is applied when subtotal is above Rs. 50,000", function () {
  const cartItems = [
    { productId: 1, quantity: 1 },
    { productId: 3, quantity: 2 },
    { productId: 5, quantity: 3 },
  ];

  const order = calculateOrder(cartItems);

  assert.equal(order.subtotal, 94100);
  assert.equal(order.discount, 9410);
  assert.equal(order.finalTotal, 84690);
});
