// import { createActions, handleActions, combineActions } from 'redux-actions';

const initialState = {
  isAuth: false,
  id: null,
  login: null,
  role: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: action.payload.log,
        isAuth: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        login: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
