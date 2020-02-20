import { createAction } from 'redux-actions';

export const addToCart = createAction('ADD_TO_CART', (obj) => ({
  obj,
}));

export const removeFromCart = createAction('REMOVE_FROM_CART', (id) => ({
  id,
}));
