import { handleActions } from 'redux-actions';
import { removeProduct, addProduct, setProducts } from '../actions/products';

const initialState = {
  isReady: false,
  isLoaded: false,
  items: null,
};

export default handleActions({
  [removeProduct]: (state, action) => ({
    ...state,
    items: state.items.filter((o) => o.id !== action.payload.id),
  }),
  [addProduct]: (state, action) => ({
    ...state,
    items: [
      ...state.items,
      action.payload.obj,
    ],
  }),
  [setProducts]: (state, action) => ({
    ...state,
    items: action.payload.products,
    isReady: true,
    isLoaded: true,
  }),
}, initialState);
