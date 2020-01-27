import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import filter from './filter';
import users from './users';

export default combineReducers({
  products,
  cart,
  filter,
  users
});
