import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';

import Profile from '../Profile';
import Cart from '../Cart';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Book store</h1>
        <Profile profile={this.props.profile} />
        <Cart cart={this.props.cart} />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  profile : state.profile,
  cart: state.cart
});

export default connect(mapStateToProps)(Header);;
