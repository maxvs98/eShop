export const login = role => ({
  type: 'LOGIN',
  payload: {
    role: role
  }
});

export const logout = () => ({
  type: 'LOGOUT'
});
