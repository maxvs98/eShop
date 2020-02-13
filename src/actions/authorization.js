export const login = (role) => ({
  type: 'LOGIN',
  payload: {
    role,
  },
});

export const logout = () => ({
  type: 'LOGOUT',
});
