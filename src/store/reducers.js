import { combineReducers } from 'redux';
import locationReducer from './location';
import profileReducer from './profile';
import cartReducer from './cart';
import categoriesReducer from './categories';
import searchReducer from './search';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    profile: profileReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    search: searchReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
