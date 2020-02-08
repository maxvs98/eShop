const initialState = {
  isAuth: false,
  role: "guest"
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        role: action.payload.role,
        isAuth: true
      };
    case 'LOGOUT':
      return {
        ...state,
        role: "guest",
        isAuth: false
      };
    default:
      return state;
  }
}
