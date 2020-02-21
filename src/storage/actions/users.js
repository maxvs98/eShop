import { createAction } from 'redux-actions';
import axios from '../../axiosInstance';

export const getUser = createAction('GET_USER', (id) => ({
  id,
}));

export const removeUser = createAction('REMOVE_USER', (id) => ({
  id,
}));

export const addUser = createAction('ADD_USER', (obj) => ({
  obj,
}));

export const setUsers = createAction('SET_USERS', (users) => ({
  users,
}));

export const loadData = () => (dispatch) => {
  axios.get('/users.json').then(({ data }) => {
    dispatch(setUsers(data));
  });
};
