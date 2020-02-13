import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import filter from './filter';
import users from './users';
import authorization from './authorization';

export default combineReducers({
  products,
  cart,
  filter,
  users,
  authorization,
});
