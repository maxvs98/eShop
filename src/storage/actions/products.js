import axios from '../../axiosInstance';

export const removeProduct = (id) => ({
  type: 'REMOVE_PRODUCT',
  payload: {
    id,
  },
});

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: {
    products,
  },
});

export const loadData = () => (dispatch) => {
  axios.get('/products.json').then(({ data }) => {
    dispatch(setProducts(data));
  });
};
