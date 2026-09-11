import React, { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { products } from "./products.js";

export default function App() {
  const [cart, setCart] = useState({});
  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  function addToCart(product) {
    setCart((current) => {
      const quantity = current[product.id] || 0;
      if (quantity >= product.stock) return current;
      return { ...current, [product.id]: quantity + 1 };
    });
  }

  return (
    <main className="catalog">
      <header className="catalog-header">
        <div>
          <p className="eyebrow">EXERCISE 2 / REACT PRODUCT CATALOG</p>
          <h1>Everyday tech essentials</h1>
          <p className="intro">Explore electronics and accessories for your workspace.</p>
        </div>
        <div className="cart-count" role="status" aria-live="polite">
          Cart items <strong data-testid="cart-count">{cartCount}</strong>
        </div>
      </header>
      <div className="section-label">
        <h2>All products</h2><span>{products.length} products</span>
      </div>
      <section className="product-grid" aria-label="Products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}
            quantity={cart[product.id] || 0} onAdd={addToCart} />
        ))}
      </section>
      <p className="catalog-note">Prices are in Pakistani rupees. Cart quantities respect available stock.</p>
    </main>
  );
}
