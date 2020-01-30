export const login = role => ({
  type: 'LOGIN',
  payload: role
});

export const logout = role => ({
  type: 'LOGOUT',
  payload: role
});
