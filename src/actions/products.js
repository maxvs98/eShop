import axios from '../axiosInstance';

export const setProducts = products => ({
  type: 'SET_PRODUCTS',
  payload: {
    products: products
  }
});

export const loadData = () => (dispatch) => {
  axios.get('/products.json').then(({ data }) => {
    dispatch(setProducts(data));
  });
};
