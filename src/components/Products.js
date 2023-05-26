import React from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";

export default function Products({ products, onAdd, cartItems }) {
  return (
    <div>
      <Header cartItems={cartItems} />
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
}
