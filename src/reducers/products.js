const initialState = {
  isReady: false,
  items: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        items: action.payload.products,
        isReady: true,
      };
    case 'ADD_PRODUCTS':
      return {
        ...state,
        items: [
          ...state.products,
          action.payload,
        ],
      };
    case 'REMOVE_PRODUCT':
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
