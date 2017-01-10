import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../store/cart';
import './Header.scss';

import Profile from '../Profile';
import Cart from '../Cart';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Book store</h1>
        <Profile profile={this.props.profile} />
        <Cart cart={this.props.cart} clearCart={this.props.clearCart.bind(this)} />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  profile : state.profile,
  cart: state.cart
});

const mapDispatchToProps = {
  clearCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);;
