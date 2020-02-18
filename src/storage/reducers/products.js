const initialState = {
  isReady: false,
  isLoaded: false,
  items: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        items: action.payload.products,
        isReady: true,
        isLoaded: true,
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        items: [
          ...state.items,
          action.payload.obj,
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
