import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/GSLogoimg.png";

export default function Header({ cartItems }) {
  const cartItemsCount = cartItems
    ? cartItems.reduce((accum, item) => accum + item.quantity, 0)
    : 0;

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/home">
        <img src={logo} alt="Logo" height="50" />
      </Navbar.Brand>
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/products">
            Salsas
          </Nav.Link>
          <Nav.Link as={Link} to="/faqs">
            FAQs
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link href="/checkout">Cart ({cartItemsCount})</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
