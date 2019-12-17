import React from "react";
import { useHistory } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, clear }) => {
  const history = useHistory();
  const handleClick = () => {
    clear();
    history.push("/");
  };

  const goBack = () => {
    history.push("/");
  };
  return (
    <div className="cart container text-center">
      <h1>Cart</h1>
      <button
        className="btn btn-dark text-white d-flex justify-content-left align-items-center"
        onClick={goBack}
      >
        <i className="fas fa-long-arrow-alt-left mr-1"></i>
        back
      </button>
      {cart.length <= 0 ? (
        <h2 className="no-items">No items in Cart</h2>
      ) : (
        <div>
          <ul className="list-group mt-1">
            {cart.map(cart => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={cart.name}
              >
                <div>{cart.name}</div>
                <div>$1</div>
              </li>
            ))}
          </ul>
          <p className="text-left">Items: {cart.length}</p>
          <p className="text-left">Total ${cart.length}</p>
          <div className="d-flex flex-column justify-content-start align-items-start">
            <button className="btn btn-primary" onClick={handleClick}>
              Checkout
            </button>
            <button className="btn btn-danger mt-2" onClick={clear()}>Clear Cart</button>
            <small>Warning: Clearing the cart is permanent</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
