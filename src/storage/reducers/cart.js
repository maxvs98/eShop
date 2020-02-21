import { handleActions } from 'redux-actions';
import { addToCart, removeFromCart, clearCart } from '../actions/cart';

const initialState = {
  items: [],
};

export default handleActions({
  [clearCart]: (state) => ({
    ...state,
    items: [],
  }),
  [addToCart]: (state, action) => ({
    ...state,
    items: [
      ...state.items,
      action.payload.obj,
    ],
  }),
  [removeFromCart]: (state, action) => ({
    ...state,
    items: state.items.filter((o) => o.id !== action.payload.id),
  }),
}, initialState);
