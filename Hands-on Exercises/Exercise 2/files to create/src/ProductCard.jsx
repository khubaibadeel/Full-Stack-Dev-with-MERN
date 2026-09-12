function ProductCard({ product, onAddToCart }) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card">
      <h2>{product.name}</h2>

      <p>Category: {product.category}</p>
      <p>Price: Rs. {product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Status: {isOutOfStock ? "Out of Stock" : "In Stock"}</p>

      <button
        onClick={onAddToCart}
        disabled={isOutOfStock}
      >
        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
