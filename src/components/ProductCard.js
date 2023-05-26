import React from "react";

export default function ProductCard({ product, onAdd, cartItems }) {
  const number = cartItems.map((item) => {
    if (item.id === product.id) {
      return item.quantity;
    }
  });
  return (
    <div className="product-container">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <div>${product.price}</div>
      <div>{product.description}</div>
      <button onClick={() => onAdd(product)}>Add to Cart ({number}) </button>
    </div>
  );
}
