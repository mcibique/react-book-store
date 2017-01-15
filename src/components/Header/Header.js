import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../store/cart';
import './Header.scss';

import Profile from '../Profile';
import Cart from '../../containers/CartContainer';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">Book store</h1>
        <Profile profile={this.props.profile} />
        <Cart className="header__cart" />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  profile : state.profile
});

export default connect(mapStateToProps)(Header);;
