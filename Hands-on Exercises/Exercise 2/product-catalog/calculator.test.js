import test from "node:test";
import assert from "node:assert/strict";
import { calculateOrder, displayAvailableProducts } from "./calculator.js";

test("only four stocked products are available", () => {
  assert.deepEqual(displayAvailableProducts().map(p => p.id), [1, 3, 4, 5]);
});
test("sample cart has a 10 percent discount", () => {
  const result = calculateOrder([
    { productId: 1, quantity: 1 }, { productId: 3, quantity: 2 },
    { productId: 5, quantity: 3 },
  ]);
  assert.equal(result.subtotal, 94100);
  assert.equal(result.discount, 9410);
  assert.equal(result.finalTotal, 84690);
});
test("no discount at exactly 50000 or below", () => {
  assert.equal(calculateOrder([{ productId: 4, quantity: 2 }]).discount, 0);
  assert.equal(calculateOrder([{ productId: 5, quantity: 1 }]).discount, 0);
});
test("empty cart totals are zero", () => {
  assert.deepEqual(calculateOrder([]), { items: [], subtotal: 0, discount: 0, finalTotal: 0 });
});
test("reject invalid, unavailable and excessive quantities", () => {
  for (const item of [
    { productId: 99, quantity: 1 }, { productId: 2, quantity: 1 },
    { productId: 1, quantity: 6 }, { productId: 1, quantity: 0 },
    { productId: 1, quantity: 1.5 },
  ]) assert.throws(() => calculateOrder([item]));
  assert.throws(() => calculateOrder([
    { productId: 1, quantity: 3 }, { productId: 1, quantity: 3 },
  ]));
});
