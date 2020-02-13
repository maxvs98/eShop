import axios from '../axiosInstance';

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
