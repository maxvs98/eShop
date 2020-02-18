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
        id: action.payload.id,
        login: action.payload.log,
        role: action.payload.role,
        isAuth: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        id: null,
        login: null,
        role: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
