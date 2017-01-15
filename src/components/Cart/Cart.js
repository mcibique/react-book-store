import React from 'react';
import classnames from 'classnames';
import './Cart.scss';

export const Cart = (props) => (
  <div className={ classnames("cart", props.className) }>
    <div className="cart__items">Items: { props.cart.items.length }</div>
    <div className="cart__total">${ props.cart.totalPrice }</div>
    <button type="button" onClick={() => props.clearCart()}>Clear</button>
  </div>
);

export default Cart;
