import React from "react";

export default function ProductCard({ product, quantity, onAdd }) {
  const outOfStock = product.stock === 0;
  const atLimit = quantity >= product.stock;
  return (
    <article className="product-card">
      <div className="product-icon" aria-hidden="true">
        {product.name.slice(0, 2).toUpperCase()}
      </div>
      <p className="category">{product.category}</p>
      <h2>{product.name}</h2>
      <p className="price">Rs. {product.price.toLocaleString("en-PK")}</p>
      <p className={outOfStock ? "stock sold-out" : "stock"}>
        {outOfStock ? "Out of stock" : `In stock: ${product.stock}`}
      </p>
      <button disabled={outOfStock || atLimit}
        onClick={() => onAdd(product)}
        aria-label={`Add ${product.name} to cart`}>
        {outOfStock ? "Out of stock" : atLimit ? "Stock limit reached" : "Add to Cart"}
      </button>
      <p className="quantity">In your cart: {quantity}</p>
    </article>
  );
}
