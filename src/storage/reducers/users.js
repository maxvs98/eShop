/* eslint-disable */
import { handleActions } from 'redux-actions';
import {
  removeUser, addUser, setUsers, getUser,
} from '../actions/users';

const initialState = {
  isReady: false,
  isLoaded: false,
  items: null,
};

export default handleActions({
  [getUser]: (state, action) => ({
    ...state,
    items: state.items.filter((o) => o.id === action.payload.id),
  }),
  [removeUser]: (state, action) => ({
    ...state,
    items: state.items.filter((o) => o.id !== action.payload.id),
  }),
  [addUser]: (state, action) => ({
    ...state,
    items: [
      ...state.items,
      action.payload.obj,
    ],
  }),
  [setUsers]: (state, action) => ({
    ...state,
    items: action.payload.users,
    isReady: true,
    isLoaded: true,
  }),
}, initialState);
