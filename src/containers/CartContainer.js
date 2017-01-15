import { connect } from 'react-redux';

import { clearCart } from '../store/cart';
import Cart from '../components/Cart';

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = {
  clearCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
