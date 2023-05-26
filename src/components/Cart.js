import React from "react";
import Header from "./Header";

export default function Cart({ cartItems }) {
  return (
    <div>
      <Header cartItems={cartItems} />
      Cart
    </div>
  );
}
