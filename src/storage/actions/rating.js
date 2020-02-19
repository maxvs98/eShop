export const addMark = (obj) => ({
  type: 'ADD_MARK',
  payload: {
    obj,
  },
});

export const removeMark = (id) => ({
  type: 'REMOVE_MARK',
  payload: {
    id,
  },
});
