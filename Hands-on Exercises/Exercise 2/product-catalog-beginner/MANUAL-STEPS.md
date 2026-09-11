# Manual Completion and Screenshot Plan

Use this project as a learning guide. Type or re-create the code yourself so you
understand it and can explain every line.

## 1. Open the project

1. Open VS Code.
2. Choose **File > Open Folder**.
3. Open the `product-catalog-beginner` folder.
4. Open **Terminal > New Terminal**.
5. Run `npm install`.

## 2. Question 1 - JavaScript Product Order Calculator

### Part 1 - Available products
1. Open `src/products.js` and review the given product array.
2. Open `calculator.js`.
3. Find `displayAvailableProducts()`.
4. Take a screenshot showing the function and its `for` loop / `if` condition.

### Part 2 - Calculate totals
1. In `calculator.js`, find `calculateOrder()`.
2. Take a screenshot showing the subtotal loop, discount `if`, and returned totals.

### Part 3 - Invoice
1. In `calculator.js`, find `displayInvoice()`.
2. Open `invoice.js` and show the sample `cartItems` and the three function calls.
3. Take a screenshot of the relevant code.
4. In the terminal run `npm run invoice`.
5. Take a screenshot of the available products and final invoice output.

The sample totals should be:
- Subtotal: Rs. 94100
- Discount: Rs. 9410
- Final Total: Rs. 84690

## 3. Question 2 - React Product Catalog

### Part 1 - Vite project and ProductCard
1. Open `src/ProductCard.jsx`.
2. Take a screenshot showing product name, category, price, stock and the button.
3. Make sure the screenshot also shows `disabled={isOutOfStock}`.

### Part 2 - Array, map and responsive grid
1. Open `src/App.jsx`.
2. Take a screenshot showing `products.map(...)` and `<ProductCard ... />`.
3. Open `src/styles.css`.
4. Take a screenshot showing `.product-grid` and both media queries.
5. In the terminal run `npm run dev`.
6. Ctrl+click the localhost URL shown by Vite.
7. Take a browser screenshot showing at least four product cards. Five will appear.
8. Confirm the Mouse button is disabled because its stock is 0.

### Part 3 - React state and event handling
1. In `src/App.jsx`, take a screenshot showing:
   - `useState(0)`
   - `addToCart()`
   - `setCartCount(cartCount + 1)`
   - `Cart Items: {cartCount}`
2. In the browser, click Add to Cart three times on any in-stock products.
3. Take a screenshot showing `Cart Items: 3`.

## 4. Prepare the Word solution file

1. Open Microsoft Word and create a blank document.
2. Add a heading: `Hands-on Exercise No. 2 - Full Stack Development with MERN`.
3. Add `Question 1 - Product Order Calculator`.
4. Under it, add Part 1, Part 2 and Part 3 headings and paste the matching screenshots.
5. Add the Question 1 terminal-output screenshot.
6. Add `Question 2 - React Product Catalog`.
7. Add Part 1, Part 2 and Part 3 headings and paste the matching code/browser screenshots.
8. Keep screenshots large enough that the code is readable.
9. Save the document as `.docx`.
10. Re-open the saved file once to make sure every screenshot is visible and readable.
11. Submit the `.docx` file to the LMS. Do not submit the project folder unless your instructor separately asks for it.
