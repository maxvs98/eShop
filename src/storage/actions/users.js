import { createAction } from 'redux-actions';
import axios from '../../axiosInstance';

export const setCurrentPage = createAction('SET_CURRENT_PAGE', (currentPage) => ({
  currentPage,
}));

export const setPageCount = createAction('SET_PAGE_COUNT', (pageCount) => ({
  pageCount,
}));

export const changeUser = createAction('CHANGE_USER', (id, obj) => ({
  id,
  obj,
}));

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
