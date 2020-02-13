const initialState = {
  isReady: false,
  items: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        items: action.payload.users,
        isReady: true,
      };
    case 'ADD_USERS':
      return {
        ...state,
        items: [
          ...state.users,
          action.payload,
        ],
      };
    case 'REMOVE_USER':
      return {
        ...state,
        items: state.items.filter((o) => o.id !== action.payload.id),
      };
    case 'SET_IS_READY':
      return {
        ...state,
        isReady: action.payload,
      };
    default:
      return state;
  }
};
