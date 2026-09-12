import { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { products } from "./products.js";

function App() {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Product Catalog</h1>
        <p className="cart">Cart Items: {cartCount}</p>
      </div>

      <div className="product-grid">
        {products.map(function (product) {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;