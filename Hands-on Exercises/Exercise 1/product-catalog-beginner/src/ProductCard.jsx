function ProductCard(props) {
  const product = props.product;
  const addToCart = props.addToCart;

  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: Rs. {product.price}</p>

      {isOutOfStock ? (
        <p className="out-of-stock">Out of Stock</p>
      ) : (
        <p>Stock: {product.stock}</p>
      )}

      <button onClick={addToCart} disabled={isOutOfStock}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
