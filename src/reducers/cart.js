const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [
          ...state.items,
          action.payload.obj
        ]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(o => o.id != action.payload.id)
      };
    default:
      return state;
  }
}
