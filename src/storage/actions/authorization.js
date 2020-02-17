export const login = (log) => ({
  type: 'LOGIN',
  payload: {
    log,
  },
});

export const logout = () => ({
  type: 'LOGOUT',
});
