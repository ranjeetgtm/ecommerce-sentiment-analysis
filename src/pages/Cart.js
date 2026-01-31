import React from "react";
import "./Cart.css";

export default function Cart({ cart, setCart }) {
  // Increase quantity
  const increaseQty = (index) => {
    const newCart = [...cart];
    newCart[index].qty = newCart[index].qty ? newCart[index].qty + 1 : 2;
    setCart(newCart);
  };

  // Decrease quantity
  const decreaseQty = (index) => {
    const newCart = [...cart];
    if (newCart[index].qty && newCart[index].qty > 1) {
      newCart[index].qty -= 1;
    } else {
      newCart.splice(index, 1); // remove if qty=1
    }
    setCart(newCart);
  };

  // Remove item completely
  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, p) => sum + p.price * (p.qty || 1), 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart-items">
          {cart.map((p, i) => (
            <div key={i} className="cart-item">
              <img src={p.image} alt={p.name} />
              <div className="cart-item-info">
                <h4>{p.name}</h4>
                <p>Price: ${p.price.toFixed(2)}</p>
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(i)}>-</button>
                  <span>{p.qty || 1}</span>
                  <button onClick={() => increaseQty(i)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(i)}>Remove</button>
              </div>
            </div>
          ))}
          <p className="total">Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
