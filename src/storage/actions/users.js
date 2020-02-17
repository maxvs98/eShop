import axios from '../../axiosInstance';

export const removeUser = (id) => ({
  type: 'REMOVE_USER',
  payload: {
    id,
  },
});

export const addUser = (obj) => ({
  type: 'ADD_USER',
  payload: {
    obj,
  },
});

export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: {
    users,
  },
});

export const loadData = () => (dispatch) => {
  axios.get('/users.json').then(({ data }) => {
    dispatch(setUsers(data));
  });
};
