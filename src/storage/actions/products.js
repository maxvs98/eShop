import { createAction } from 'redux-actions';
import axios from '../../axiosInstance';

export const removeProduct = createAction('REMOVE_PRODUCT', (id) => ({
  id,
}));

export const addProduct = createAction('ADD_PRODUCT', (obj) => ({
  obj,
}));

export const setProducts = createAction('SET_PRODUCTS', (products) => ({
  products,
}));

export const loadData = () => (dispatch) => {
  axios.get('/products.json').then(({ data }) => {
    dispatch(setProducts(data));
  });
};
