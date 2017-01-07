import React from 'react';
import './Cart.scss';

export const Cart = (props) => (
  <div className="cart">
    {props.cart.items.length}
  </div>
);

export default Cart;
