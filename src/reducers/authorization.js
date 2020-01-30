const initialState = {
  role: null,
  isAuth: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuth: true,
        role: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuth: false,
        role: null
      };
    default:
      return state;
  }
}
