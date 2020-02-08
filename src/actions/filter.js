export const setFilter = filter => ({
  type: 'SET_FILTER',
  payload: {
    filter: filter
  }
});

export const setSearchQuery = value => ({
  type: 'SET_QUERY',
  payload: {
    value: value
  }
});
