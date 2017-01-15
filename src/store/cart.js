// ------------------------------------
// Constants
// ------------------------------------
export const CART_ADD_TO_CART = 'CART_ADD_TO_CART';
export const CART_CLEAR_CART = 'CART_CLEAR_CART';

// ------------------------------------
// Actions
// ------------------------------------
export const addToCart = (book) => {
  return { type: CART_ADD_TO_CART, book };
}

export const clearCart = () => {
  return { type: CART_CLEAR_CART };
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { items: [], totalPrice: 0 };
export default function cartReducer (state = initialState, action) {
  switch(action.type) {
    case CART_ADD_TO_CART: {
      let items = [...state.items, action.book];
      let totalPrice = items.reduce((prev, curr) => prev + curr.price, 0);

      return {
        ...state,
        items,
        totalPrice
      };
    }
    case CART_CLEAR_CART: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
}
