import { handleActions } from 'redux-actions';
import { addToCart, removeFromCart } from '../actions/cart';

const initialState = {
  items: [],
};

export default handleActions({
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
