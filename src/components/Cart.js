import React, { useState } from "react";
import Header from "./Header";
import { Button, Card } from "react-bootstrap";

export default function Cart({ cartItems, onAdd, onRemove }) {
  const getTotalSum = () => {
    return cartItems.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
  };

  const [show, setShow] = useState(false);

  function submitOrder() {
    setShow((current) => !current);
  }

  function deleteItem() {
    localStorage.clear();
    window.location.reload();
  }

  if (cartItems.length === 0 || cartItems === []) {
    return (
      <div>
        <Header cartItems={cartItems} />{" "}
        <div className="cart">Cart is empty</div>
      </div>
    );
  } else {
    return (
      <div>
        <Header cartItems={cartItems} />
        <br />
        <br />
        <div className="cart">
          {cartItems.map((item) => {
            return (
              <div className="cartCards">
                <Card
                  key={item.id}
                  style={{ width: "18rem" }}
                  className="cartCards"
                >
                  <Card.Title>{item.name}</Card.Title>
                  <img src={item.image} className="itemImage" alt={item.name} />
                  <Card.Text>
                    {item.quantity} x ${item.price}
                  </Card.Text>
                  <div className="d-grid gap-2">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => onAdd(item)}
                    >
                      {" "}
                      +{" "}
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => onRemove(item)}
                    >
                      {" "}
                      -{" "}
                    </Button>
                  </div>
                  <br />
                  <br />
                </Card>
              </div>
            );
          })}
        </div>
        <div className="orderSubmit">Total Price: ${getTotalSum()}</div>
        <div className="orderSubmit">
          <Button variant="outline-primary" onClick={submitOrder} size="sm">
            Submit
          </Button>
          <br />
          <br />
          <Button
            size="sm"
            className="emptyButton"
            variant="outline-secondary"
            onClick={() => deleteItem()}
          >
            Empty Cart
          </Button>
        </div>
      </div>
    );
  }
}
