import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ cart }) {
  return (
    <header className="header">
      <h1>Ecommerce Sentiment Analysis System</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}
