import { handleActions } from 'redux-actions';
import { login, logout } from '../actions/authorization';

const initialState = {
  isAuth: true,
  id: null,
  login: null,
  role: 'admin',
};

export default handleActions({
  [login]: (state, action) => ({
    ...state,
    id: action.payload.id,
    login: action.payload.log,
    role: action.payload.role,
    isAuth: true,
  }),
  [logout]: (state) => ({
    ...state,
    id: null,
    login: null,
    role: null,
    isAuth: false,
  }),
}, initialState);
