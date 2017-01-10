import React from 'react';
import './Cart.scss';

export const Cart = (props) => (
  <div className="cart">
    <div>{props.cart.items.length}</div>
    <div>{props.cart.totalPrice}</div>
    <button type="button" onClick={() => props.clearCart()}>Clear</button>
  </div>
);

export default Cart;
