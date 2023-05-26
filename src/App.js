import React, { useState, useEffect } from "react";
import db from "./firebase.js";
import { onSnapshot, collection } from "firebase/firestore";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

function App() {
  useEffect(
    () =>
      onSnapshot(collection(db, "products"), (snapshot) =>
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const [products, setProducts] = useState([]);

  //set initial state of cart by fetching localStorage or empty array by creating this variable and placing it in the state of cartItems
  const cartFromLocalStorage = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  );

  const [cartItems, setCartItems] = useState([...cartFromLocalStorage]);

  // this useEffect is used to set the localStorage based on the dependency of cartItems -- NEED THIS or they will work in independent states
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: (exist.quantity += 1) }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id)) &&
        localStorage.removeItem("cartItems");
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home cartItems={cartItems} />} />
        <Route
          path="/products"
          element={
            <Products products={products} onAdd={onAdd} cartItems={cartItems} />
          }
        />
        <Route
          path="/checkout"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          }
        />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
